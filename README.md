# City Chain Identity

Mobile app to hold your digital identity. Use it to access your profile, tickets, certificates and other digital elements that is signed to your identity.

## Functionality

The City Chain Identity app begins with transfering from your computer to your phone. Within City Hub you can choose to export the private key, which is your secure key that give access to one specific identity. The app will scan a QR code from your computer, which will registery the identity inside the app.

## Identity Profile

The app have two main features, one of them is your identity profile. The app allows you to view and edit your profile.

## Identity Assets

Second feature of the app, is to list all assets that belongs to your identity. This can be tickets, shares, properties, contracts and more.

The app will attempt to intelligently order your assets, so that tickets for events today will appear on top of the list.

## Verification

With the app on your phone, you can share your public key (identity id) with others using a QR code as well.

Another functionality to perform verification, is verification of ownership to tickets. Tickets and their status is public available on the nodes, but the tickets does not have the purchasers id available. Instead the issuer of tickets can verify when the user presents their proofs as QR-codes on their phone, where event / ticket issuer can scan and verify.

## Technology

The app is built using React Native and all communication with the blockchain happens through REST API on public hubs.

App relies on local storage to keep a cache of all data, making it available offline and instantly on app start.
