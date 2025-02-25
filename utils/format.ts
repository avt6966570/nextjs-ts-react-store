export const formatCurrency = (amount: number | null) => {
    const value = amount || 0
    return new Intl.NumberFormat('ru', {
        style: 'currency',
        currency: 'RUB',
    }).format(value)
}

export const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('ru', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }).format(date)
}
