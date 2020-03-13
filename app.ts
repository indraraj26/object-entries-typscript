class TestObject {
    constructor() { }

    getData(obj: any): any {
        // Property 'entries' does not exist on type 'ObjectConstructor'.ts(2339)
        return Object.entries(obj).map(([key, value]) => {
            console.log(key, value)
        })
    }
}

const test = new TestObject();
console.log(test.getData({ id: 1, name: 'Alexa' }))