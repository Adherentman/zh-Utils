declare class ZhUtils {
    static capitalize: (str: string) => string;
    static sleep: (ms: number) => Promise<void>;
    static dataFormatYYYYMMDD: (data: string | number) => string;
}
export default ZhUtils;
