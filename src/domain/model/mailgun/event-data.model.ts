import IClientInfo from "../../../domain/interfaces/mailgun/clientinfo.interface";
import IDeliveryStatus from "../../../domain/interfaces/mailgun/deliverystatus.interface";
import IEnvelope from "../../../domain/interfaces/mailgun/envelope.interface";
import IEventData from "../../../domain/interfaces/mailgun/event-data.interface";
import IFlags from "../../../domain/interfaces/mailgun/flags.interface";
import IGeolocation from "../../../domain/interfaces/mailgun/geolocation.interface";
import IMessage from "../../../domain/interfaces/mailgun/message.interface";
import IStorage from "../../../domain/interfaces/mailgun/storage.interface";
import IUserVariables from "../../../domain/interfaces/mailgun/uservariables.interface";
import ClientInfoModel from "./clientinfo.model";
import DeliveryStatusModel from "./deliverystatus.model";
import EnvelopeModel from "./envelope.model";
import FlagsModel from "./flags.model";
import GeolocationModel from "./geolocation.model";
import MessageModel from "./message.model";
import StorageModel from "./storage.model";
import UserVariablesModel from "./uservariables.model";

export default class EventDataModel {
  private _event: string;
  private _timestamp: string | number;
  private _id: string;
  private _recipient: string;
  private _logLevel: string;
  private _message: IMessage;
  private _tags: string[];
  private _storage: IStorage;
  private _envelope: IEnvelope;

  private _recipientDomain: string;
  private _campaigns: unknown[];
  private _userVariables: IUserVariables;
  private _flags: IFlags;
  private _deliveryStatus: IDeliveryStatus;

  private _geolocation: IGeolocation;
  private _ip: string;
  private _clientInfo: IClientInfo;

  private _severity: string;
  private _reason: string;

  constructor(eventdata: IEventData) {
    this._event = eventdata["event"];
    this._timestamp = eventdata["timestamp"];
    this._id = eventdata["id"];
    this._recipient = eventdata["recipient"];
    this._logLevel = eventdata["log-level"];
    this._message = eventdata["message"];
    this._tags = eventdata["tags"];
    this._storage = eventdata["storage"];
    this._envelope = eventdata["envelope"];

    this._recipientDomain = eventdata["recipient-domain"];
    this._campaigns = eventdata["campaigns"];
    this._userVariables = eventdata["user-variables"];
    this._flags = eventdata["flags"];
    this._deliveryStatus = eventdata["delivery-status"];

    this._geolocation = eventdata["geolocation"];
    this._ip = eventdata["ip"];
    this._clientInfo = eventdata["client-info"];

    this._severity = eventdata["severity"];
    this._reason = eventdata["reason"];
  }

  /**
   * @param value
   * @returns string
   */
  setEvent(value: string): void {
    this._event = value !== "" ? value : null;
  }

  /**
   * Get event
   * @return {string|*}
   */
  getEvent(): string {
    return this._event;
  }

  /**
   * @param value
   * @returns string
   */
  setTimestamp(value: string | number): void {
    this._timestamp = value !== "" ? value : null;
  }

  /**
   * Get timestamp
   * @return {string | number*}
   */
  getTimestamp(): string | number {
    return this._timestamp;
  }

  /**
   * @param value
   * @returns string
   */
  setRecipient(value: string): void {
    this._recipient = value !== "" ? value : null;
  }

  /**
   * Get recipient
   * @return {string|*}
   */
  getRecipient(): string {
    return this._recipient;
  }

  /**
   * @param value
   * @returns string
   */
  setLogLevel(value: string): void {
    this._logLevel = value !== "" ? value : null;
  }

  /**
   * Get logLevel
   * @return {string|*}
   */
  getLogLevel(): string {
    return this._logLevel;
  }

  /**
   * @param value
   * @returns IMessage
   */
  setMessage(value: IMessage): void {
    this._message = new MessageModel(value).getEntityMappings();
  }

  /**
   * Get message
   * @return {IMessage|*}
   */
  getMessage(): IMessage {
    return this._message;
  }

  /**
   * @param value
   * @returns string
   */
  setId(value: string): void {
    this._id = value !== "" ? value : null;
  }

  /**
   * Get id
   * @return {string|*}
   */
  getId(): string {
    return this._id;
  }

  /**
   * @param value
   * @returns string[]
   */
  setTags(value: string[]): void {
    this._tags = value !== undefined ? value : null;
  }

  /**
   * Get tags
   * @return {string[]|*}
   */
  getTags(): string[] {
    return this._tags;
  }

  /**
   * @param value
   * @returns IStorage
   */
  setStorage(value: IStorage): void {
    this._storage = new StorageModel(value).getEntityMappings();
  }

  /**
   * Get IStorage
   * @return {IStorage|*}
   */
  getStorage(): IStorage {
    return this._storage;
  }

  /**
   * @param value
   * @returns IEnvelope
   */
  setEnvelope(value: IEnvelope): void {
    this._envelope = new EnvelopeModel(value).getEntityMappings();
  }

  /**
   * Get IEnvelope
   * @return {IEnvelope|*}
   */
  getEnvelope(): IEnvelope {
    return this._envelope;
  }

  /**
   * @param value
   * @returns string
   */
  setRecipientDomain(value: string): void {
    this._recipientDomain = value !== "" ? value : null;
  }

  /**
   * Get recipientDomain
   * @return {string|*}
   */
  getRecipientDomain(): string {
    return this._recipientDomain;
  }

  /**
   * @param value
   * @returns unknown[]
   */
  setCampaigns(value: unknown[]): void {
    this._campaigns = value.length ? value : [];
  }

  /**
   * Get campaigns
   * @return {unknown[]|*}
   */
  getCampaigns(): unknown[] {
    return this._campaigns;
  }

  /**
   * @param value
   * @returns IUserVariables
   */
  setUserVariables(value: IUserVariables): void {
    this._userVariables = new UserVariablesModel(value).getEntityMappings();
  }

  /**
   * Get userVariables
   * @return {IUserVariables|*}
   */
  getUserVariables(): IUserVariables {
    return this._userVariables;
  }

  /**
   * @param value
   * @returns IFlags
   */
  setFlags(value: IFlags): void {
    this._flags = new FlagsModel(value).getEntityMappings();
  }

  /**
   * Get flags
   * @return {IFlags|*}
   */
  getFlags(): IFlags {
    return this._flags;
  }

  /**
   * @param value
   * @returns IDeliveryStatus
   */
  setDeliveryStatus(value: IDeliveryStatus): void {
    this._deliveryStatus = new DeliveryStatusModel(value).getEntityMappings();
  }

  /**
   * Get deliveryStatus
   * @return {IDeliveryStatus|*}
   */
  getDeliveryStatus(): IDeliveryStatus {
    return this._deliveryStatus;
  }

  /**
   * @param value
   * @returns IGeolocation
   */
  setGeolocation(value: IGeolocation): void {
    this._geolocation = new GeolocationModel(value).getEntityMappings();
  }

  /**
   * Get geolocation
   * @return {IGeolocation|*}
   */
  getGeolocation(): IGeolocation {
    return this._geolocation;
  }

  /**
   * @param value
   * @returns string
   */
  setIp(value: string): void {
    this._ip = value !== "" ? value : null;
  }

  /**
   * Get ip
   * @return {string|*}
   */
  getIp(): string {
    return this._ip;
  }

  /**
   * @param value
   * @returns IClientInfo
   */
  setClientInfo(value: IClientInfo): void {
    this._clientInfo = new ClientInfoModel(value).getEntityMappings();
  }

  /**
   * Get severity
   * @return {string|*}
   */
  getClientInfo(): IClientInfo {
    return this._clientInfo;
  }

  /**
   * @param value
   * @returns string
   */
  setSeverity(value: string): void {
    this._severity = value !== "" ? value : null;
  }

  /**
   * Get severity
   * @return {string|*}
   */
  getSeverity(): string {
    return this._severity;
  }

  /**
   * @param value
   * @returns string
   */
  setReason(value: string): void {
    this._reason = value !== "" ? value : null;
  }

  /**
   * Get reason
   * @return {string|*}
   */
  getReason(): string {
    return this._reason;
  }

  /**
   * Get event data entity mappings
   * @return {IEventData}
   */
  getEntityMappings(): IEventData {
    return {
      event: this.getEvent(),
      timestamp: this.getTimestamp(),
      id: this.getId(),
      recipient: this.getRecipient(),
      "log-level": this.getLogLevel(),
      message: this.getMessage(),
      tags: this.getTags(),
      storage: this.getStorage(),
      envelope: this.getEnvelope(),

      "recipient-domain": this.getRecipientDomain(),
      campaigns: this.getCampaigns(),
      "user-variables": this.getUserVariables(),
      flags: this.getFlags(),
      "delivery-status": this.getDeliveryStatus(),

      geolocation: this.getGeolocation(),
      ip: this.getIp(),
      "client-info": this.getClientInfo(),

      severity: this.getSeverity(),
      reason: this.getReason(),
    };
  }
}
