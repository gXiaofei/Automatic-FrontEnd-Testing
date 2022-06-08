import {fetchData, fetchDataPromise, fetchDataPromiseError} from './fetchData';

test('fetchData 返回结果为{success: true} callback', (done) => {
    fetchData((data) => {
        expect(data).toEqual({success: true});
        done();
    })
})



test('fetchData 返回结果为 404 promise', () => {

    // 下面需要执行一次 expect
    expect.assertions(1);

    // fetchDataPromise 返回的是一个promise 
    // 需要添加 return 返回才可以
    return fetchDataPromise().then(response => {
        expect(response.data).toEqual({success: true})
    }).catch(e => {
        // 测试404
        expect(e.toString().indexOf('404') > -1).toEqual(true)
    })
})

test('fetchData success', () => {

    // 取数据包含 数据 

    return expect(fetchDataPromise()).resolves.toMatchObject({
        data: {
            success: true
        }
    })
})

test('fetchData 404', () => {

    // return expect(fetchDataPromise()).rejects.toThrow();
})


test('fetchData await', async () => {

    // 取数据包含 数据 
    await expect(fetchDataPromise()).resolves.toMatchObject({
        data: {
            success: true
        }
    })
})

test('fetchData 404 await', async () => {

    // await expect(fetchDataPromise()).rejects.toThrow();
})


test('fetchData await', async () => {
    const response = await fetchDataPromise()
    expect(response.data).toEqual({
        success: true
    })
})

test('fetchData 404 await', async () => {
    expect.assertions(1);

    try{
        await fetchDataPromiseError();
    } catch(e) {
        expect(e.toString(e)).toMatch(/404/);
    }
})


