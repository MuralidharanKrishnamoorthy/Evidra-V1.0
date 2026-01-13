export const calculateNextReminder = (currentDateStr, frequency, customDays = 0) => {
    if (!currentDateStr) return '';

    const date = new Date(currentDateStr);

    if (isNaN(date.getTime())) return currentDateStr;

    switch (frequency) {
        case 'Weekly':
            date.setDate(date.getDate() + 7);
            break;
        case 'Monthly':
            const currentDay = date.getDate();
            date.setMonth(date.getMonth() + 1);
            if (date.getDate() !== currentDay) {
                date.setDate(0);
            }
            break;
        case 'Quarterly':
            const qDay = date.getDate();
            date.setMonth(date.getMonth() + 3);
            if (date.getDate() !== qDay) {
                date.setDate(0);
            }
            break;
        case 'Yearly':
            date.setFullYear(date.getFullYear() + 1);
            break;
        case 'Custom':
            const days = parseInt(customDays, 10) || 0;
            date.setDate(date.getDate() + days);
            break;
        default:
            break;
    }

    return date.toISOString().split('T')[0];
};
