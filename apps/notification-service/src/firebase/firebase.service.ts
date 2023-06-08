import { Injectable } from '@nestjs/common';
import * as firebase from 'firebase-admin';
import { BatchResponse, MessagingOptions, MessagingPayload, MulticastMessage } from 'firebase-admin/lib/messaging';

//@ts-ignore
import * as firebaseCredentials from './config.json';

@Injectable()
export class FirebaseService {
  constructor() {
    if (!firebase.apps.length) {
      firebase.initializeApp({
        credential: firebase.credential.cert({
          projectId: firebaseCredentials.project_id,
          privateKey: firebaseCredentials.private_key,
          clientEmail: firebaseCredentials.client_email,
        }),
      });
    }
  }

  async sendToDevices(registrationTokens: string[], payload: MessagingPayload, options?: MessagingOptions) {
    return firebase.messaging().sendToDevice(registrationTokens, payload, options);
  }

  async sendMulticast(payload: MulticastMessage, dryRun?: boolean): Promise<BatchResponse> {
    return firebase.messaging().sendMulticast(payload, dryRun);
  }
}
