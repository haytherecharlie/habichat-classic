import * as admin from 'firebase-admin'
import * as serviceAccounts from 'config/service-accounts.json'

const serviceAccount = {
  type: serviceAccounts.type,
  projectId: serviceAccounts.project_id,
  privateKeyId: serviceAccounts.private_key_id,
  privateKey: serviceAccounts.private_key,
  clientEmail: serviceAccounts.client_email,
  clientId: serviceAccounts.client_id,
  authUri: serviceAccounts.auth_uri,
  tokenUri: serviceAccounts.token_uri,
  authProviderX509CertUrl: serviceAccounts.auth_provider_x509_cert_url,
  clientC509CertUrl: serviceAccounts.client_x509_cert_url
}

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://habichat-86de6.firebaseio.com'
})

export const auth = admin.auth
export const db = admin.firestore
export const hd = admin.storage
export const timestamp = admin.firestore.FieldValue.serverTimestamp
