import AuthService from "./AuthService";
import { collection, getFirestore, doc, getDoc } from "firebase/firestore";
import { FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut, UserCredential }
    from "firebase/auth";
import { ClientData } from "../models/ClientData";
import LoginData from "../models/LoginData";
import appFirebase from "../config/firebase-config";

const ADMINISTRATORS_COLLECTION_NAME = 'administrators'
export default class AuthServiceFirebase implements AuthService {
    whichService: string = "email";
    authFirebase = getAuth(appFirebase);
    administratorsCollection = collection(getFirestore(appFirebase), ADMINISTRATORS_COLLECTION_NAME);
    login(loginData: LoginData): Promise<boolean | ClientData> {
        console.log(this.whichService)
        return this.whichService !== "email" ? this.authPopupProvider(this.whichService) :
            this.authPassword(loginData);
    }
    private async authPassword(loginData: LoginData): Promise<boolean | ClientData> {
        try {
            const userDetails = await signInWithEmailAndPassword(this.authFirebase, loginData.email,
                loginData.password);
            return this.getClientData(userDetails);
        } catch (err) {
            return false;
        }
    }
    async authPopupProvider(providerName: string): Promise<boolean | ClientData> {
        try {
            let newAuthProvider: GoogleAuthProvider | FacebookAuthProvider | GithubAuthProvider;
            switch (providerName) {
                case "google" : newAuthProvider = new GoogleAuthProvider(); break;
                case "facebook" : newAuthProvider = new FacebookAuthProvider(); break;
                case "git": newAuthProvider = new GithubAuthProvider(); break;
                default: return false
            }
            const userDetails = await signInWithPopup(this.authFirebase, newAuthProvider);
            return this.getClientData(userDetails);
        } catch (err) {
            return false;
        }
    }
    private async getClientData(userDetails: UserCredential) {
        const { uid, email, displayName } = userDetails.user;
        return { displayName: displayName || email, email, isAdmin: await this.isAdmin(uid) } as ClientData;
    }
    private async isAdmin(uid: string): Promise<boolean> {
        return (await getDoc(doc(this.administratorsCollection, uid))).exists();
    }

    async logout(): Promise<boolean> {
        try {
            await signOut(this.authFirebase)
            return true;
        } catch (err) {
            return false;
        }
    }

}