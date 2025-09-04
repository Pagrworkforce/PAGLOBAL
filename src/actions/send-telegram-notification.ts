'use server';

function formatMessage(data: any, tier: string, trackingId: string): string {
    let message = '<b>🚨 New PAGR Registration! 🚨</b>\n\n';
    message += `<b>Tracking ID:</b> ${trackingId}\n`;
    message += `<b>Section:</b> ${tier.charAt(0).toUpperCase() + tier.slice(1)}\n`;
    message += '----------------------------------\n';
    message += `<b>Full Name:</b> ${data.fullName || 'N/A'}\n`;
    message += `<b>Email:</b> ${data.email || 'N/A'}\n`;
    message += `<b>Phone:</b> ${data.phone || 'N/A'}\n`;
    
    if (data.industry) {
        message += `<b>Industry:</b> ${data.industry === 'Others (please specify)' ? data.otherIndustry : data.industry}\n`;
    }

    if (tier === 'worker') {
        message += `<b>Primary Skills:</b> ${data.skills || 'N/A'}\n`;
        message += `<b>Experience:</b> ${data.experienceLevel || 'N/A'}\n`;
        message += `<b>Goals:</b>\n<pre>${data.goals || 'N/A'}</pre>\n`;
    } else if (tier === 'employer') {
        message += `<b>Company:</b> ${data.companyName || 'N/A'}\n`;
        message += `<b>Company Size:</b> ${data.companySize || 'N/A'}\n`;
        message += `<b>Needs:</b>\n<pre>${data.workforceNeeds || 'N/A'}</pre>\n`;
    } else if (tier === 'partner') {
        message += `<b>Organization:</b> ${data.companyName || 'N/A'}\n`;
        message += `<b>Partnership Goals:</b>\n<pre>${data.workforceNeeds || 'N/A'}</pre>\n`;
    }
    
    message += '----------------------------------\n';
    message += `<i>Submitted on: ${new Date().toUTCString()}</i>`;

    return message;
}


export async function sendTelegramNotification(data: any, tier: string) {
    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
        throw new Error('Telegram bot token or chat ID is not configured.');
    }

    const trackingId = `PAGR-${Date.now().toString().slice(-6)}`;
    const message = formatMessage(data, tier, trackingId);

    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            chat_id: chatId,
            text: message,
            parse_mode: 'HTML',
        }),
    });

    if (!response.ok) {
        const errorBody = await response.json();
        console.error('Failed to send Telegram message:', errorBody);
        throw new Error(`Telegram API error: ${errorBody.description}`);
    }

    return response.json();
}
