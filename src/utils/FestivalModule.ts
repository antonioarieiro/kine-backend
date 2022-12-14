export const metadata = {
  CategoryId: 'u32',
  AnonVoteId: 'u32',
  AnonFestivalId: 'u32',
  PollingStationId: 'u32',
  PollingStation: {
    owner: 'AccountId',
    anon_fest_id: 'AnonFestivalId',
    name: 'Vec<u8>',
    description: 'Vec<u8>',
  },
  Category: {
    name: 'Vec<u8>',
    description: 'Vec<u8>',
  },
  AnonVote: {
    owner: 'AccountId',
    owner_pub_key: 'Vec<u8>',
    anon_fest_id: 'AnonFestivalId',
    pooling_station: 'PollingStationId',
    delegated_encryptor: 'AccountId',
    enc_vote: 'Vec<u8>',
    raw_vote: 'Vec<u8>',
    vote_status: 'AnonVoteStatus',
    amount: 'BalanceOf',
  },
  AnonVoteStatus: {
    _enum: ['Encrypted', 'Decrypted'],
  },
  AnonFestival: {
    creator: 'AccountId',
    name: 'Vec<u8>',
    description: 'Vec<u8>',
    status: 'AnonFestivalStatus',
    min_entry: 'BalanceOf',
  },
  AnonFestivalStatus: {
    _enum: [
      'RecentlyCreated',
      'WaitingForStationMember',
      'Open',
      'OnDecryption',
      'Counting',
      'NormalFinish',
      'AbnormalFinish',
    ],
  },
  InfringimentType: {
    _enum: ['Adult', 'CopyRight', 'Community'],
  },
  RestakeFunds: {
    _enum: ['Yes', 'No'],
  },
  RankingList: {
    creator: 'AccountId',
    name: 'Vec<u8>',
    description: 'Vec<u8>',
    status: 'RankingListStatus',
  },
  ComplaintId: 'u32',
  ComplaintType: {
    _enum: ['Category', 'Festival', 'Movie'],
  },
  InfrigimentType: {
    _enum: ['Adult', 'CopyRight', 'Community'],
  },
  Complaint: {
    denunciator: 'AccountId',
    complaint_type: 'ComplaintType',
    complained_id: 'u32',
    infrigiment: 'InfrigimentType',
  },
  FestivalId: 'u32',
  Festival: {
    owner: 'AccountId',
    id: 'FestivalId',
    name: 'Vec<u8>',
    description: 'Vec<u8>',
    status: 'FestivalStatus',
    min_entry: 'BalanceOf',
  },
  FestivalStatus: {
    _enum: ['New', 'Approved', 'Declined', 'Active', 'Inactive'],
  },
  Movie: {
    owner: 'AccountId',
    name: 'Vec<u8>',
    description: 'Vec<u8>',
    link: 'Vec<u8>',
  },
  MovieId: 'u32',
  RankingListStatus: {
    _enum: ['New', 'Approved', 'Declined', 'Inactive'],
  },
  RankingListId: 'u32',
  Space: {
    owner: 'AccountId',
    name: 'Vec<u8>',
    descriptioon: 'Vec<u8>',
    following: 'u32',
    followers: 'u32',
  },
  Post: {
    owner: 'AccountId',
    id: 'PostId',
    content: 'Vec<u8>',
    image_ipfs: 'Vec<u8>',
    video_ipfs: 'Vec<u8>',
    likes: 'u32',
    dislikes: 'u32',
    date: 'BlockNumber',
  },
  Comment: {
    owner: 'AccountId',
    id: 'CommentId',
    content: 'Vec<u8>',
    post_id: 'PostId',
    parent_comment_id: 'CommentId',
    likes: 'u32',
    dislikes: 'u32',
    date: 'BlockNumber',
  },
  PostId: 'u32',
  CommentId: 'u32',
};
