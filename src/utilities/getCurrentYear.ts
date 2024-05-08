export const getCurrentYear = (): string => {
	const currentDate = new Date()
	const year = currentDate.getFullYear();
	return year === 2024 ? '2024' : `2024 - ${year}`
}