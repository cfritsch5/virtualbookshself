# notes

## Development resource notes

### GoodReads image use discussion  https://www.goodreads.com/topic/show/17955600-understanding-apis-to-retreive-images-of-book

### GoodReads api key Page
https://www.goodreads.com/api/keys

### Amazon API
  - have to be an amazon associate???

use itemlookup to get image of item - need item id
http://docs.aws.amazon.com/AWSECommerceService/latest/DG/RG_Images.html

use itemlookup to get dimensions
http://docs.aws.amazon.com/AWSECommerceService/latest/DG/CHAP_response_elements.html#ItemDimensions

  - use s3 for user uploads of images and then only save the url in my database in rails?
  - //maybe use cloudinary?

### app store
5 - 10 days for code review before getting on the app store

## Bugs

### react native not compatable w/ npm 5
I had to downgrade to npm 4 inorder to work with react native
instructions from https://github.com/react-community/create-react-native-app/issues/233

solution commnds
 - $ npm i -g npm@4.6.1
 //globally reinstall npm 4
 - npm install create-react-native-app
