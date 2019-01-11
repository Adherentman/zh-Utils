declare class ZhUtils {
    static capitalize: (str: string) => string;
    static sleep: (ms: number) => Promise<any>;
    static dataFormatYYYYMMDD: (data: string | number) => string;
}
export default ZhUtils;
