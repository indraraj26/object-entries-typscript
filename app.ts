class TestObject {
    constructor() { }

    getData(obj: any): any {
        return Object.entries(obj).map(([key, value]) => {
            console.log(key, value)
        })
    }
}

const test = new TestObject();
console.log(test.getData({ id: 1, name: 'Alexa' }))