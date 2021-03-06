import { auth, db, storage } from "./FireBase-config";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import {
  collection,
  addDoc,
  doc,
  setDoc,
  getDocs,
  getDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  QueryConstraint,
} from "firebase/firestore";
import {ref, uploadBytes, uploadBytesResumable, getDownloadURL} from "firebase/storage"
import { Filter, GeneralData } from "../Models/Models";

export const LogIn = async (Email: string, Password: string) => {
  try {
    const res = await signInWithEmailAndPassword(auth, Email, Password);
    return res;
  } catch (error) {
    return error;
  }
};

export const createDoc = async (collectionName: string, data: any) => {
  try {
    const res = await addDoc(collection(db, collectionName), data);
    return { data: res, error: false };
  } catch (error) {
    return { data: error, error: true };
  }
};

export const createDocCustomID = async (
  id: string,
  collectionName: string,
  data: any
) => {
  try {
    const res = await setDoc(doc(db, collectionName, id), data);
    return { data: res, error: false };
  } catch (error) {
    return { data: error, error: true };
  }
};

export const getAll = async (collectionName: string) => {
  try {
    let data: GeneralData[] = [];
    const res = await getDocs(collection(db, collectionName));
    res.forEach((doc) => {
      if (doc.exists()) {
        data.push({ ...doc.data(), id: doc.id });
      }
    });
    return { data: data, error: false };
  } catch (error) {
    return { data: error, error: true };
  }
};

export const getById = async (collectionName: string, id: string) => {
  try {
    let data: GeneralData[] = [];
    const res = await getDoc(doc(db, collectionName, id));

    return { data: res.data(), error: false };
  } catch (error) {
    return { data: error, error: true };
  }
};

export const getWithQuery = async (collectionName: string, Where: any) => {
  try {
    let data: GeneralData[] = [];
    let filter: QueryConstraint[] = [];
    Where.forEach((item: Filter) => {
      filter.push(where(item?.field, item?.operator, item?.value));
    });

    const ref = collection(db, collectionName),
      Query = query(ref, ...filter,);
    // orderBy("createdAt", "desc")
    const res = await getDocs(Query);
    res.forEach((doc) => {
      if (doc.exists()) {
        data.push({ ...doc.data(), id: doc.id });
      }
    });
    return { data: data, error: false };
  } catch (error) {


    return { data: error, error: true };
  }
};

export const getWithQueryOrder = async (collectionName: string, Where: any, order: any) => {
  try {
    let data: GeneralData[] = [];
    let filter: QueryConstraint[] = [];
    Where.forEach((item: Filter) => {
      filter.push(where(item?.field, item?.operator, item?.value));
    });

    const ref = collection(db, collectionName),
      Query = query(ref, ...filter, );
    // orderBy("createdAt", "desc")
    const res = await getDocs(Query);
    res.forEach((doc) => {
      if (doc.exists()) {
        data.push({ ...doc.data(), id: doc.id });
      }
    });
    return { data: data, error: false };
  } catch (error) {


    return { data: error, error: true };
  }
};

export const update = async (collectionName: string, id: string | any, updateData: any) => {
  try {
    const ref = doc(db, collectionName, id),
      res = await updateDoc(ref, updateData);
    return { data: res, error: false };
  } catch (error) {
    return { data: error, error: true };
  }
};

export const deleteOne = async (collectionName: string, id: string) => {
  try {
    const ref = doc(db, collectionName, id),
      res = await deleteDoc(ref);
    return { data: res, error: false };
  } catch (error) {
    return { data: error, error: true };
  }
};


export const fileUpload = async (folderName:string, fileName:string, file:any)=>{
  try {
    const fileRef = ref(storage, `${folderName}/${fileName}`),
      res = await uploadBytesResumable(fileRef, file),
      URL = await getDownloadURL(fileRef);
    return { data: URL, error: false };
  } catch (error) {
    return { data: error, error: true };
  }
}