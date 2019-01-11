import ZhUtils from '../src';
import dayjs from 'dayjs';

const utils = new ZhUtils();

describe('Test Utils Function', () => {
  it('capitalize', () => {
    expect(utils.capitalize('hello')).toBe('Hello')
  });

  it('test sleep', async() => {
    const start = dayjs().second();
    await utils.sleep(2000);
    const end = dayjs().second();
    expect(end - start).toBe(2)
  });

  it('dataFormatYYYYMMDD', () => {
    const data = utils.dataFormatYYYYMMDD(new Date().getTime());
    expect(data).toBe(dayjs(new Date().getTime()).format('YYYY-MM-DD'))
  })
})