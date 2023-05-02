import { Injectable } from '@nestjs/common';
import * as firebase from 'firebase-admin';
import {
  BatchResponse,
  MessagingDevicesResponse,
  MessagingOptions,
  MessagingPayload,
  MulticastMessage,
} from 'firebase-admin/lib/messaging';

//@ts-ignore
import * as firebaseCre from './config.json';

const serviceAccount = {
  projectId: firebaseCre.project_id,
  privateKey: firebaseCre.private_key,
  clientEmail: firebaseCre.client_email,
};

const fireBaseApp = firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
});

@Injectable()
export class FirebaseService {
  constructor() {}

  async sendToDevices(
    registrationTokens: string[],
    payload: MessagingPayload,
    options?: MessagingOptions,
  ): Promise<MessagingDevicesResponse> {
    return firebase.messaging().sendToDevice(registrationTokens, payload, options);
  }

  async sendMulticast(payload: MulticastMessage, dryRun?: boolean): Promise<BatchResponse> {
    return firebase.messaging().sendMulticast(payload, dryRun);
  }
}
