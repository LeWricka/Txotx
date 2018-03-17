import * as functions from 'firebase-functions';

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

export const helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
});

export const karmaCalculationalber = functions.database.ref('/sidreros/alberto/karma/likes')
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
export const karmaCalculationaritz = functions.database.ref('/sidreros/aritz/karma/likes')
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



export const karmaCalculationacarol = functions.database.ref('/sidreros/carol/karma/likes')
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


export const karmaCalculationcharles = functions.database.ref('/sidreros/charles/karma/likes')
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


export const karmaCalculationferk = functions.database.ref('/sidreros/ferk/karma/likes')
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


export const karmaCalculationgorka = functions.database.ref('/sidreros/gorka/karma/likes')
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


export const karmaCalculationiker = functions.database.ref('/sidreros/iker/karma/likes')
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


export const karmaCalculationisma = functions.database.ref('/sidreros/isma/karma/likes')
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


export const karmaCalculationkarlos = functions.database.ref('/sidreros/karlos/karma/likes')
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


export const karmaCalculationkike = functions.database.ref('/sidreros/kike/karma/likes')
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


export const karmaCalculationlaura = functions.database.ref('/sidreros/laura/karma/likes')
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

export const karmaCalculationmike = functions.database.ref('/sidreros/mike/karma/likes')
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
export const karmaCalculationpablo = functions.database.ref('/sidreros/pablo/karma/likes')
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
export const karmaCalculationujue = functions.database.ref('/sidreros/ujue/karma/likes')
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
export const karmaCalculationvictor = functions.database.ref('/sidreros/victor/karma/likes')
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