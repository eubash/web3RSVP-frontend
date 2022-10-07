export type TEvent = {
  id: string,
  eventID: string,
  name: string,
  description: string,
  link: string
  imageURL: string
  eventOwner: string,
  eventTimestamp: number,
  maxCapacity: number,
  deposit: number,
  paidOut: boolean,
  totalRSVPs: number,
  totalConfirmedAttendees: number,
  rsvps: Record<string, any>[],
  confirmedAttendees: Record<string, any>[],
};