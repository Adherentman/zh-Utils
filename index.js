// 首字母大写
const capitalize = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

const wait = (ms: number) => new Promise((r, j) => setTimeout(r, ms));


const dataFormat = (data: string | number) => {
	let r = data;
	if (typeof data === 'string') {
		r = Number(data);
	}
	return dayjs(r).format('YYYY-MM-DD');
};

