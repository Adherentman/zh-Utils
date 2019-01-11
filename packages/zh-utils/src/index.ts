import dayjs from "dayjs";

class ZhUtils {
  /**
   * 首字母大写
   * @param str 要首字母大写的字符串
   */
  static capitalize = (str: string): string => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  /**
   * 模拟异步等待
   * @param ms 等待的秒数
   */
  static sleep = (ms: number): Promise<any> =>
    new Promise((resolve: any) => setTimeout(resolve, ms));

  static dataFormatYYYYMMDD = (data: string | number): string => {
    let r = data;
    if (typeof data === "string") {
      r = Number(data);
    }
    return dayjs(r).format("YYYY-MM-DD");
  };
}

export default ZhUtils