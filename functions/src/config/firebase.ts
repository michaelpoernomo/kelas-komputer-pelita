import app from 'firebase/app'
import 'firebase/database'

const { databaseURL, projectId } = JSON.parse(process.env.FIREBASE_CONFIG || '{}')
console.log(databaseURL, ' ', projectId)

const firebaseConfig = {
  databaseURL: databaseURL,
  projectId: projectId,
}

interface FirebaseClass {
  db: app.database.Database
}

class Firebase {
  db: app.database.Database

  constructor() {
    app.initializeApp(firebaseConfig)
    this.db = app.database()
  }
}

export type { FirebaseClass }
export default Firebase
