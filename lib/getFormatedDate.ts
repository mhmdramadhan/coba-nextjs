export default function getFormattedDate(dateString: string): string {
    return new Intl.DateTimeFormat('id', { dateStyle: 'long' }).format(new Date(dateString))
}