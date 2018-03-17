"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript
exports.helloWorld = functions.https.onRequest((request, response) => {
    response.send("Hello from Firebase!");
});
exports.karmaCalculationalber = functions.database.ref('/sidreros/alberto/karma/likes')
    .onWrite(event => {
    const collectionRef = event.data.ref.parent;
    const total = collectionRef.parent.child('karma/total');
    const parentRef = collectionRef.parent.child('karma/likes');
    return parentRef.once('value').then((snapshot) => {
        let val = 0;
        snapshot.forEach((child) => {
            val = val + parseInt(child.val());
        });
        return event.data.ref.parent.child('total').set(val / snapshot.numChildren());
    });
});
exports.karmaCalculationaritz = functions.database.ref('/sidreros/aritz/karma/likes')
    .onWrite(event => {
    const collectionRef = event.data.ref.parent;
    const total = collectionRef.parent.child('karma/total');
    const parentRef = collectionRef.parent.child('karma/likes');
    return parentRef.once('value').then((snapshot) => {
        let val = 0;
        snapshot.forEach((child) => {
            val = val + parseInt(child.val());
        });
        return event.data.ref.parent.child('total').set(val / snapshot.numChildren());
    });
});
exports.karmaCalculationacarol = functions.database.ref('/sidreros/carol/karma/likes')
    .onWrite(event => {
    const collectionRef = event.data.ref.parent;
    const total = collectionRef.parent.child('karma/total');
    const parentRef = collectionRef.parent.child('karma/likes');
    return parentRef.once('value').then((snapshot) => {
        let val = 0;
        snapshot.forEach((child) => {
            val = val + parseInt(child.val());
        });
        return event.data.ref.parent.child('total').set(val / snapshot.numChildren());
    });
});
exports.karmaCalculationcharles = functions.database.ref('/sidreros/charles/karma/likes')
    .onWrite(event => {
    const collectionRef = event.data.ref.parent;
    const total = collectionRef.parent.child('karma/total');
    const parentRef = collectionRef.parent.child('karma/likes');
    return parentRef.once('value').then((snapshot) => {
        let val = 0;
        snapshot.forEach((child) => {
            val = val + parseInt(child.val());
        });
        return event.data.ref.parent.child('total').set(val / snapshot.numChildren());
    });
});
exports.karmaCalculationferk = functions.database.ref('/sidreros/ferk/karma/likes')
    .onWrite(event => {
    const collectionRef = event.data.ref.parent;
    const total = collectionRef.parent.child('karma/total');
    const parentRef = collectionRef.parent.child('karma/likes');
    return parentRef.once('value').then((snapshot) => {
        let val = 0;
        snapshot.forEach((child) => {
            val = val + parseInt(child.val());
        });
        return event.data.ref.parent.child('total').set(val / snapshot.numChildren());
    });
});
exports.karmaCalculationgorka = functions.database.ref('/sidreros/gorka/karma/likes')
    .onWrite(event => {
    const collectionRef = event.data.ref.parent;
    const total = collectionRef.parent.child('karma/total');
    const parentRef = collectionRef.parent.child('karma/likes');
    return parentRef.once('value').then((snapshot) => {
        let val = 0;
        snapshot.forEach((child) => {
            val = val + parseInt(child.val());
        });
        return event.data.ref.parent.child('total').set(val / snapshot.numChildren());
    });
});
exports.karmaCalculationiker = functions.database.ref('/sidreros/iker/karma/likes')
    .onWrite(event => {
    const collectionRef = event.data.ref.parent;
    const total = collectionRef.parent.child('karma/total');
    const parentRef = collectionRef.parent.child('karma/likes');
    return parentRef.once('value').then((snapshot) => {
        let val = 0;
        snapshot.forEach((child) => {
            val = val + parseInt(child.val());
        });
        return event.data.ref.parent.child('total').set(val / snapshot.numChildren());
    });
});
exports.karmaCalculationisma = functions.database.ref('/sidreros/isma/karma/likes')
    .onWrite(event => {
    const collectionRef = event.data.ref.parent;
    const total = collectionRef.parent.child('karma/total');
    const parentRef = collectionRef.parent.child('karma/likes');
    return parentRef.once('value').then((snapshot) => {
        let val = 0;
        snapshot.forEach((child) => {
            val = val + parseInt(child.val());
        });
        return event.data.ref.parent.child('total').set(val / snapshot.numChildren());
    });
});
exports.karmaCalculationkarlos = functions.database.ref('/sidreros/karlos/karma/likes')
    .onWrite(event => {
    const collectionRef = event.data.ref.parent;
    const total = collectionRef.parent.child('karma/total');
    const parentRef = collectionRef.parent.child('karma/likes');
    return parentRef.once('value').then((snapshot) => {
        let val = 0;
        snapshot.forEach((child) => {
            val = val + parseInt(child.val());
        });
        return event.data.ref.parent.child('total').set(val / snapshot.numChildren());
    });
});
exports.karmaCalculationkike = functions.database.ref('/sidreros/kike/karma/likes')
    .onWrite(event => {
    const collectionRef = event.data.ref.parent;
    const total = collectionRef.parent.child('karma/total');
    const parentRef = collectionRef.parent.child('karma/likes');
    return parentRef.once('value').then((snapshot) => {
        let val = 0;
        snapshot.forEach((child) => {
            val = val + parseInt(child.val());
        });
        return event.data.ref.parent.child('total').set(val / snapshot.numChildren());
    });
});
exports.karmaCalculationlaura = functions.database.ref('/sidreros/laura/karma/likes')
    .onWrite(event => {
    const collectionRef = event.data.ref.parent;
    const total = collectionRef.parent.child('karma/total');
    const parentRef = collectionRef.parent.child('karma/likes');
    return parentRef.once('value').then((snapshot) => {
        let val = 0;
        snapshot.forEach((child) => {
            val = val + parseInt(child.val());
        });
        return event.data.ref.parent.child('total').set(val / snapshot.numChildren());
    });
});
exports.karmaCalculationmike = functions.database.ref('/sidreros/mike/karma/likes')
    .onWrite(event => {
    const collectionRef = event.data.ref.parent;
    const total = collectionRef.parent.child('karma/total');
    const parentRef = collectionRef.parent.child('karma/likes');
    return parentRef.once('value').then((snapshot) => {
        let val = 0;
        snapshot.forEach((child) => {
            val = val + parseInt(child.val());
        });
        return event.data.ref.parent.child('total').set(val / snapshot.numChildren());
    });
});
exports.karmaCalculationpablo = functions.database.ref('/sidreros/pablo/karma/likes')
    .onWrite(event => {
    const collectionRef = event.data.ref.parent;
    const total = collectionRef.parent.child('karma/total');
    const parentRef = collectionRef.parent.child('karma/likes');
    return parentRef.once('value').then((snapshot) => {
        let val = 0;
        snapshot.forEach((child) => {
            val = val + parseInt(child.val());
        });
        return event.data.ref.parent.child('total').set(val / snapshot.numChildren());
    });
});
exports.karmaCalculationujue = functions.database.ref('/sidreros/ujue/karma/likes')
    .onWrite(event => {
    const collectionRef = event.data.ref.parent;
    const total = collectionRef.parent.child('karma/total');
    const parentRef = collectionRef.parent.child('karma/likes');
    return parentRef.once('value').then((snapshot) => {
        let val = 0;
        snapshot.forEach((child) => {
            val = val + parseInt(child.val());
        });
        return event.data.ref.parent.child('total').set(val / snapshot.numChildren());
    });
});
exports.karmaCalculationvictor = functions.database.ref('/sidreros/victor/karma/likes')
    .onWrite(event => {
    const collectionRef = event.data.ref.parent;
    const total = collectionRef.parent.child('karma/total');
    const parentRef = collectionRef.parent.child('karma/likes');
    return parentRef.once('value').then((snapshot) => {
        let val = 0;
        snapshot.forEach((child) => {
            val = val + parseInt(child.val());
        });
        return event.data.ref.parent.child('total').set(val / snapshot.numChildren());
    });
});
//# sourceMappingURL=index.js.map