import Firebase from '../config/firebase'
import { getTodayTime } from '../utils/date'
import { throwError } from './error'

const db = new Firebase().db

export interface Murid {
  id: string
  nama: string
  nomer: string
  lastLogin: string
}

export interface MuridSession {
  profile: Murid
  token: string
}

export interface ProfilePayload {
  nama: string
  nomer: string
}

export const getMuridList = async (): Promise<Murid[]> => {
  const snapshot = await db.ref('/murid/').once('value').catch(throwError)
  return snapshot.val().map((item: Murid) => item.nama)
}

export const getMuridById = async (id: string): Promise<Murid | undefined> => {
  const snapshot = await db.ref(`/murid/${id}`).once('value').catch(throwError)
  if (snapshot.val()) return snapshot.val()
  return undefined
}

export const getMuridByProfile = async (payload: ProfilePayload): Promise<Murid | undefined> => {
  const { nama, nomer } = payload
  const snapshot = await db.ref('/murid/').once('value').catch(throwError)
  const list = snapshot.val().filter((item: Murid) => item.nama === nama && item.nomer === nomer)
  if (list[0]) return list[0]
  return undefined
}

export const setMuridLastLogin = async (murid: Murid): Promise<Murid> => {
  const newMurid = { ...murid, lastLogin: getTodayTime() }
  await db.ref(`murid/${murid.id}/`).set(newMurid).catch(throwError)
  return newMurid
}
