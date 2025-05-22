export const displayPrice = (item, isYearly) => {
    if (!item) return "--";
    if (isYearly) return `$${parseFloat(item.yearly).toLocaleString('en-US')}/yr` || "--";
    if (!isYearly) return `$${parseFloat(item.monthly).toLocaleString('en-US')}/mo` || "--";
}