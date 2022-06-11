interface AddressInterface {
    email: string;
    name: string;
}

export interface MessageInterface {
    to: AddressInterface;
    from: AddressInterface;
    subject: string;
    body: string;
}

export interface MailProviderInterface {
    sendMail(message: MessageInterface): Promise<void>;
}