export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};

/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Date custom scalar type */
  Date: any;
  /** url to key, key to url */
  ImageUrl: any;
  /** url scalar */
  URL: any;
}

export interface AddBlogToAdvertisementArgs {
  advertisementCode: Scalars["Int"];
  blogCode: Scalars["Int"];
}

export interface AddBlogToSpotArgs {
  blogCode: Scalars["Int"];
  spotCode: Scalars["Int"];
}

export interface AddCurrencyExchangePriceArgs {
  currencyExchangePrice: CurrencyExchangePriceArgs;
  exchangeCode: Scalars["Int"];
}

export interface AddGiftToOrderShippingInput {
  localName: Scalars["String"];
  merchandiseId: Scalars["ID"];
  orderShippingId: Scalars["ID"];
  quantity: Scalars["Int"];
}

export interface AddHashtagToLanguageCourseTranslationArgs {
  name: Scalars["String"];
  /** LanguageCourseTranslation.id */
  translationId: Scalars["ID"];
}

export interface AddIgnoredPushMessageTypeArgs {
  types: Array<NotificationMessageType>;
  /** user device id */
  udid: Scalars["String"];
}

export interface AddPaymentInput {
  amount: Scalars["Float"];
  currency: CurrencyType;
  orderCode: Scalars["String"];
  paymentId: Scalars["String"];
}

export interface AddPercentRefundPolicyArgs {
  percentRefundPolicy: PercentRefundPolicyArgs;
  reservationPolicyCode: Scalars["Int"];
}

export interface AddProxyShopToAdvertisementArgs {
  advertisementCode: Scalars["Int"];
  language: LanguageType;
  proxyShopId: Scalars["ID"];
}

export interface AddRemarkToReservationArgs {
  remarkCode: Scalars["Int"];
  reservationPolicyCode: Scalars["Int"];
}

export interface AddRequiredInfoToReservationPolicyArgs {
  requiredInfoCode: Scalars["Int"];
  reservationPolicyCode: Scalars["Int"];
}

export interface AddShippingInfoToOrderShippingForBulkInput {
  invoiceNumber: Scalars["String"];
  orderShippingCode: Scalars["String"];
  shippingCompany: Scalars["String"];
  shippingDescription?: InputMaybe<Scalars["String"]>;
  shippingUrl?: InputMaybe<Scalars["String"]>;
}

export interface AddShippingInfoToOrderShippingInput {
  id: Scalars["ID"];
  invoiceNumber: Scalars["String"];
  shippingCompany: Scalars["String"];
  shippingDescription?: InputMaybe<Scalars["String"]>;
  shippingUrl?: InputMaybe<Scalars["String"]>;
}

export interface AddSpotToAdvertisementArgs {
  advertisementCode: Scalars["Int"];
  spotCode: Scalars["Int"];
}

export interface AddSpotToContractArgs {
  contractCode: Scalars["Int"];
  spotCode: Scalars["Int"];
}

export interface AddSpotToCouponArgs {
  couponCode: Scalars["Int"];
  spotCode: Scalars["Int"];
}

export interface AddSpotToVoucherTemplateArgs {
  spotCode: Scalars["Int"];
  voucherTemplateCode: Scalars["Int"];
}

export interface AddTagToAdvertisementArgs {
  advertisementCode: Scalars["Int"];
  tagCode: Scalars["Int"];
}

export interface AddTagToLanguageCourseTranslationInput {
  /** LanguageCourseTag.id */
  tagId: Scalars["ID"];
  /** LanguageCourseTranslation.id */
  translationId: Scalars["ID"];
}

export interface AddTripHashtagToBlogTransArgs {
  blogTransCode: Scalars["Int"];
  name: Scalars["String"];
}

export interface AddTripHashtagToSpotTransArgs {
  name: Scalars["String"];
  spotTransCode: Scalars["Int"];
}

export interface AddTypeToBlogArgs {
  blogCode: Scalars["Int"];
  type: BlogType;
}

export interface AddVoucherToReservationArgs {
  reservationCode: Scalars["Int"];
  voucherCode: Scalars["String"];
}

export interface AddressOption {
  __typename?: "AddressOption";
  /** YYYY-MM-DD HH:mm:ss */
  createdAt: Scalars["Date"];
  id: Scalars["ID"];
  level: AddressOptionLevelType;
  name: Scalars["String"];
  priority?: Maybe<Scalars["Int"]>;
  /** YYYY-MM-DD HH:mm:ss */
  updatedAt: Scalars["Date"];
}

export interface AddressOptionCreateInput {
  level: AddressOptionLevelType;
  name: Scalars["String"];
  /** level FIRST ????????? ?????? */
  priority?: InputMaybe<Scalars["Int"]>;
}

export interface AddressOptionFilter {
  level?: InputMaybe<AddressOptionLevelType>;
  name?: InputMaybe<Scalars["String"]>;
}

export type AddressOptionLevelType = "FIRST" | "SECOND" | "THIRD";

export interface AddressOptionOrder {
  direction: OrderByDirectionType;
  field: AddressOptionOrderType;
}

export type AddressOptionOrderType = "createdAt" | "priority";

export interface AddressOptionPage {
  __typename?: "AddressOptionPage";
  edges: Array<AddressOption>;
  totalCount: Scalars["Int"];
}

export interface AddressOptionPageInput {
  filter?: InputMaybe<AddressOptionFilter>;
  limit: Scalars["Int"];
  order?: InputMaybe<AddressOptionOrder>;
  page: Scalars["Int"];
}

export interface AddressOptionUpdateInput {
  id: Scalars["ID"];
  name?: InputMaybe<Scalars["String"]>;
  /** level FIRST ????????? ?????? */
  priority?: InputMaybe<Scalars["Int"]>;
}

export interface Advertisement {
  __typename?: "Advertisement";
  advertiserName: Scalars["String"];
  blog?: Maybe<Blog>;
  blogCode?: Maybe<Scalars["Int"]>;
  code: Scalars["Int"];
  /** YYYY-MM-DD HH:mm:ss */
  createdAt: Scalars["Date"];
  id: Scalars["ID"];
  period: Period;
  spot?: Maybe<Spot>;
  spotCode?: Maybe<Scalars["Int"]>;
  tags?: Maybe<Array<Tag>>;
  translations?: Maybe<Array<AdvertisementTrans>>;
  type: AdvertisementType;
  /** YYYY-MM-DD HH:mm:ss */
  updatedAt: Scalars["Date"];
}

export interface AdvertisementTagsArgs {
  types?: InputMaybe<Array<TagType>>;
}

export interface AdvertisementTranslationsArgs {
  language?: InputMaybe<LanguageType>;
}

export interface AdvertisementFilter {
  isExistsInPeriod?: InputMaybe<Scalars["Boolean"]>;
  isPublish?: InputMaybe<Scalars["Boolean"]>;
  language?: InputMaybe<LanguageType>;
  search?: InputMaybe<Scalars["String"]>;
  type?: InputMaybe<AdvertisementType>;
}

export interface AdvertisementHasTag {
  __typename?: "AdvertisementHasTag";
  advertisementCode: Scalars["Int"];
  code: Scalars["Int"];
  /** YYYY-MM-DD HH:mm:ss */
  createdAt: Scalars["Date"];
  tagCode: Scalars["Int"];
  /** YYYY-MM-DD HH:mm:ss */
  updatedAt: Scalars["Date"];
}

export interface AdvertisementOrder {
  direction?: InputMaybe<OrderByDirectionType>;
  field: AdvertisementOrderFieldType;
}

export type AdvertisementOrderFieldType = "CREATED_AT" | "RANDOM";

export interface AdvertisementPage {
  __typename?: "AdvertisementPage";
  edges: Array<Advertisement>;
  totalCount: Scalars["Int"];
}

export interface AdvertisementPageArgs {
  filter?: InputMaybe<AdvertisementFilter>;
  limit: Scalars["Int"];
  order?: InputMaybe<AdvertisementOrder>;
  page: Scalars["Int"];
}

export interface AdvertisementTrans {
  __typename?: "AdvertisementTrans";
  advertisementCode: Scalars["Int"];
  code: Scalars["Int"];
  /** YYYY-MM-DD HH:mm:ss */
  createdAt: Scalars["Date"];
  description?: Maybe<Scalars["String"]>;
  desktopImageUrl?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  imageUrl?: Maybe<Scalars["String"]>;
  isPublish: Scalars["Boolean"];
  language: LanguageType;
  linkUrl?: Maybe<Scalars["String"]>;
  localizedPriceDescription?: Maybe<Scalars["Float"]>;
  mobileImageUrl?: Maybe<Scalars["String"]>;
  /** @deprecated ?????? ??? ?????? */
  optionalDescription?: Maybe<Scalars["String"]>;
  /** ?????? ?????? */
  priceDescription?: Maybe<Scalars["Int"]>;
  proxyShop?: Maybe<ProxyShop>;
  proxyShopId?: Maybe<Scalars["Int"]>;
  tabletImageUrl?: Maybe<Scalars["String"]>;
  title: Scalars["String"];
  /** YYYY-MM-DD HH:mm:ss */
  updatedAt: Scalars["Date"];
}

export interface AdvertisementTransLocalizedPriceDescriptionArgs {
  input: LocalizedPriceArgs;
}

export type AdvertisementTransStatusType = "PUBLISH";

export type AdvertisementType =
  | "BLOG"
  | "COUPON"
  | "COUPON_BANNER"
  | "NEWS"
  | "PROXY_BANNER"
  | "PROXY_SHOPPING"
  | "SPOT"
  | "TRIP_BANNER";

export interface ApplyOrderPointInput {
  orderId: Scalars["ID"];
  point: Scalars["Float"];
}

export interface ApplyPointToLanguageCourseRegistrationPaymentInput {
  /** LanguageCourseRegistration.id */
  registrationId: Scalars["ID"];
  /** ????????? ????????? */
  value: Scalars["Float"];
}

export interface ApplyPointToReservationArgs {
  /** reservation??? pk??? */
  code: Scalars["Int"];
  /** ????????? ????????? */
  value: Scalars["Float"];
}

export interface Banner {
  __typename?: "Banner";
  advertiserName: Scalars["String"];
  /** @deprecated proxyShops ??? ?????? */
  bannerHasProxyShops?: Maybe<Array<BannerHasProxyShop>>;
  blogs?: Maybe<Array<Blog>>;
  code: Scalars["Int"];
  /** YYYY-MM-DD HH:mm:ss */
  createdAt: Scalars["Date"];
  creator?: Maybe<Member>;
  creatorCode?: Maybe<Scalars["Float"]>;
  description?: Maybe<Scalars["String"]>;
  desktopImageUrl?: Maybe<Scalars["URL"]>;
  exposePosition: BannerExposePositionType;
  /** @deprecated image??? ????????? ?????? */
  extraDescription?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  isPublish: Scalars["Boolean"];
  language: LanguageType;
  mobileImageUrl?: Maybe<Scalars["URL"]>;
  modifier?: Maybe<Member>;
  modifierCode?: Maybe<Scalars["Float"]>;
  name: Scalars["String"];
  /** YYYY-MM-DD HH:mm:ss */
  periodFrom: Scalars["Date"];
  /** YYYY-MM-DD HH:mm:ss */
  periodTo: Scalars["Date"];
  proxyShops?: Maybe<Array<ProxyShop>>;
  spots?: Maybe<Array<Spot>>;
  tabletImageUrl?: Maybe<Scalars["URL"]>;
  /** YYYY-MM-DD HH:mm:ss */
  updatedAt: Scalars["Date"];
}

export type BannerExposePositionType = "COUPON" | "PROXY_SHOP" | "RESERVATION";

export interface BannerFilter {
  bannerExposePosition?: InputMaybe<BannerExposePositionType>;
  isPublish?: InputMaybe<Scalars["Boolean"]>;
  language?: InputMaybe<LanguageType>;
  period?: InputMaybe<PeriodArgs>;
  search?: InputMaybe<Scalars["String"]>;
}

export interface BannerHasProxyShop {
  __typename?: "BannerHasProxyShop";
  banner: Banner;
  bannerCode: Scalars["Int"];
  code: Scalars["Int"];
  /** YYYY-MM-DD HH:mm:ss */
  createdAt: Scalars["Date"];
  id: Scalars["ID"];
  proxyShop: ProxyShop;
  proxyShopId: Scalars["ID"];
  /** YYYY-MM-DD HH:mm:ss */
  updatedAt: Scalars["Date"];
}

export interface BannerOrder {
  direction?: InputMaybe<OrderByDirectionType>;
  field: BannerOrderType;
}

export type BannerOrderType = "CREATED_AT" | "RANDOM";

export interface BannerPage {
  __typename?: "BannerPage";
  edges: Array<Banner>;
  totalCount: Scalars["Int"];
}

export interface BannerPageArgs {
  filter?: InputMaybe<BannerFilter>;
  limit: Scalars["Int"];
  order?: InputMaybe<BannerOrder>;
  page: Scalars["Int"];
}

export type BaseOrderType = "CREATED_AT";

export interface Blog {
  __typename?: "Blog";
  categories?: Maybe<Array<Category>>;
  code: Scalars["Int"];
  content?: Maybe<Scalars["String"]>;
  /** YYYY-MM-DD HH:mm:ss */
  createdAt: Scalars["Date"];
  description?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  images?: Maybe<Array<Image>>;
  isLiked?: Maybe<Scalars["Boolean"]>;
  isUserBlog: Scalars["Boolean"];
  likeCount: Scalars["Int"];
  memberCode: Scalars["Int"];
  pointAdded: Scalars["Boolean"];
  proxyShops?: Maybe<Array<ProxyShop>>;
  reviewCount: Scalars["Int"];
  reviews: BlogReviewPage;
  shareCount: Scalars["Int"];
  spots?: Maybe<Array<Spot>>;
  spotsForUser: Array<Spot>;
  subtitle?: Maybe<Scalars["String"]>;
  tags?: Maybe<Array<Tag>>;
  title?: Maybe<Scalars["String"]>;
  translations?: Maybe<Array<BlogTrans>>;
  /** ????????? ?????? */
  types: Array<BlogType>;
  /** YYYY-MM-DD HH:mm:ss */
  updatedAt: Scalars["Date"];
  userBlogStatus: UserBlogStatusType;
  viewCount: Scalars["Int"];
  writer: Member;
}

export interface BlogCategoriesArgs {
  types?: InputMaybe<Array<CategoryType>>;
}

export interface BlogImagesArgs {
  isMain?: InputMaybe<Scalars["Boolean"]>;
}

export interface BlogReviewsArgs {
  input: BlogReviewPageArgs;
}

export interface BlogSpotsArgs {
  language?: InputMaybe<LanguageType>;
}

export interface BlogSpotsForUserArgs {
  language?: InputMaybe<LanguageType>;
}

export interface BlogTranslationsArgs {
  language?: InputMaybe<LanguageType>;
}

export interface BlogFilter {
  /** OR ???????????? ??????????????? */
  categories?: InputMaybe<Array<Scalars["Int"]>>;
  cityCategory?: InputMaybe<Scalars["Int"]>;
  /** ????????? ????????? ????????? ???????????? ?????? - ?????? ??? ?????? */
  isDefault?: InputMaybe<Scalars["Boolean"]>;
  /** ???????????? ???????????? ????????? ??? ?????? ???????????? ???????????? ?????? - ?????? ??? ?????? */
  isMain?: InputMaybe<Scalars["Boolean"]>;
  /** ?????? ??? ?????? */
  isPublish?: InputMaybe<Scalars["Boolean"]>;
  /** ?????? ??? ?????? */
  isRecommend?: InputMaybe<Scalars["Boolean"]>;
  /** mandatory */
  language: LanguageType;
  title?: InputMaybe<Scalars["String"]>;
  types?: InputMaybe<Array<BlogType>>;
}

export interface BlogHasProxyShop {
  __typename?: "BlogHasProxyShop";
  blog: Blog;
  blogId: Scalars["ID"];
  /** YYYY-MM-DD HH:mm:ss */
  createdAt: Scalars["Date"];
  id: Scalars["ID"];
  proxyShop: ProxyShop;
  proxyShopId: Scalars["ID"];
  /** YYYY-MM-DD HH:mm:ss */
  updatedAt: Scalars["Date"];
}

export interface BlogHasSpot {
  __typename?: "BlogHasSpot";
  blog: Blog;
  blogCode: Scalars["Int"];
  code: Scalars["Int"];
  /** YYYY-MM-DD HH:mm:ss */
  createdAt: Scalars["Date"];
  id: Scalars["ID"];
  spot: Spot;
  spotCode: Scalars["Int"];
  /** YYYY-MM-DD HH:mm:ss */
  updatedAt: Scalars["Date"];
}

export type BlogLikeOrderType = "CREATED_AT";

export interface BlogMostViewedArgs {
  filter: BlogMostViewedFilter;
  limit: Scalars["Int"];
  order?: InputMaybe<ViewedCountOrder>;
  page: Scalars["Int"];
}

export interface BlogMostViewedFilter {
  categoryCodes?: InputMaybe<Array<Scalars["Int"]>>;
  cityCategoryCode?: InputMaybe<Scalars["Int"]>;
  language: LanguageType;
  period: PeriodArgs;
  size?: InputMaybe<Scalars["Int"]>;
  types: Array<BlogType>;
}

export interface BlogOrder {
  direction?: InputMaybe<OrderByDirectionType>;
  field: BlogOrderType;
}

export type BlogOrderType = "CREATED_AT" | "LIKE_COUNT" | "RENEWAL_DATE";

export interface BlogPage {
  __typename?: "BlogPage";
  edges: Array<Blog>;
  totalCount: Scalars["Int"];
}

export interface BlogPageArgs {
  filter: BlogFilter;
  limit: Scalars["Int"];
  order?: InputMaybe<BlogOrder>;
  page: Scalars["Int"];
}

export interface BlogReview {
  __typename?: "BlogReview";
  blog: Blog;
  blogCode: Scalars["Float"];
  children?: Maybe<Array<BlogReview>>;
  code: Scalars["Int"];
  /** YYYY-MM-DD HH:mm:ss */
  createdAt: Scalars["Date"];
  id: Scalars["ID"];
  parentCode?: Maybe<Scalars["Float"]>;
  translations?: Maybe<Array<BlogReviewTrans>>;
  /** YYYY-MM-DD HH:mm:ss */
  updatedAt: Scalars["Date"];
  writer: Member;
}

export interface BlogReviewChildrenArgs {
  order?: InputMaybe<BlogReviewOrder>;
}

export interface BlogReviewTranslationsArgs {
  language: LanguageType;
}

export interface BlogReviewCreateArgs {
  blogCode: Scalars["Int"];
  /** ?????? ?????? */
  content: Scalars["String"];
  language: LanguageType;
  /** ????????? ?????????, ??????????????? code */
  parentCode?: InputMaybe<Scalars["Int"]>;
}

export interface BlogReviewFilter {
  blogCode: Scalars["Int"];
}

export interface BlogReviewOrder {
  direction: OrderByDirectionType;
  field: BlogReviewOrderType;
}

export type BlogReviewOrderType = "CREATED_AT";

export interface BlogReviewPage {
  __typename?: "BlogReviewPage";
  edges: Array<BlogReview>;
  totalCount: Scalars["Int"];
}

export interface BlogReviewPageArgs {
  filter?: InputMaybe<BlogReviewFilter>;
  limit: Scalars["Int"];
  order?: InputMaybe<BlogReviewOrder>;
  page: Scalars["Int"];
}

export interface BlogReviewTrans {
  __typename?: "BlogReviewTrans";
  blogReviewCode: Scalars["Float"];
  code: Scalars["Int"];
  content: Scalars["String"];
  /** YYYY-MM-DD HH:mm:ss */
  createdAt: Scalars["Date"];
  id: Scalars["ID"];
  isDefault: Scalars["Boolean"];
  language: LanguageType;
  /** YYYY-MM-DD HH:mm:ss */
  updatedAt: Scalars["Date"];
}

export interface BlogReviewUpdateArgs {
  /** ?????? ?????? */
  content: Scalars["String"];
  language: LanguageType;
  reviewCode: Scalars["Int"];
}

export interface BlogTrans {
  __typename?: "BlogTrans";
  blogCode: Scalars["Float"];
  code: Scalars["Int"];
  content?: Maybe<Scalars["String"]>;
  /** YYYY-MM-DD HH:mm:ss */
  createdAt: Scalars["Date"];
  description?: Maybe<Scalars["String"]>;
  excerpt?: Maybe<Scalars["String"]>;
  hashtags?: Maybe<Array<TripHashtag>>;
  id: Scalars["ID"];
  isDefault: Scalars["Boolean"];
  /** @deprecated move main image to blog translations */
  isMain: Scalars["Boolean"];
  isPublish: Scalars["Boolean"];
  isRecommend: Scalars["Boolean"];
  isTableOfContents: Scalars["Boolean"];
  language: LanguageType;
  mainImageFullUrl?: Maybe<Scalars["String"]>;
  mainImageUrl?: Maybe<Scalars["String"]>;
  renewalDate: Scalars["Date"];
  subtitle?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
  /** YYYY-MM-DD HH:mm:ss */
  updatedAt: Scalars["Date"];
}

export interface BlogTransExcerptArgs {
  length: Scalars["Int"];
}

export interface BlogTransHasTripHashtag {
  __typename?: "BlogTransHasTripHashtag";
  blogTrans: BlogTrans;
  blogTransCode: Scalars["Int"];
  code: Scalars["Int"];
  /** YYYY-MM-DD HH:mm:ss */
  createdAt: Scalars["Date"];
  hashtag: TripHashtag;
  hashtagCode: Scalars["Int"];
  id: Scalars["ID"];
  /** YYYY-MM-DD HH:mm:ss */
  updatedAt: Scalars["Date"];
}

export type BlogTransStatusType =
  | "DEFAULT"
  | "MAIN"
  | "PUBLISH"
  | "RECOMMEND"
  | "TABLE_OF_CONTENTS";

export type BlogType = "NEWS" | "PROXY" | "TRAVEL";

export interface BrandListArgs {
  /** ?????? ????????? */
  categoryIds?: InputMaybe<Array<Scalars["ID"]>>;
  /** default ???????????? */
  createdAt?: InputMaybe<PeriodInput>;
  /** ?????? ???????????? ???????????? ????????? ???????????? ??????, null???????????? ?????? ????????? ?????? ???????????? ???????????? */
  hasEvent?: InputMaybe<Scalars["Boolean"]>;
  language: LanguageType;
  /** default ?????? ????????? */
  limit?: InputMaybe<Scalars["Int"]>;
}

export interface BulkCreateCartItemArgs {
  data: Array<CartItemCreateInput>;
}

export interface BulkCreateVoucherArgs {
  vouchers: Array<CreateVoucherInput>;
}

export interface BulkSetRequiredInfoToLanguageCourseTranslationArgs {
  /** LanguageCourseRequiredInfo.id */
  infoIds: Array<Scalars["ID"]>;
  status: Scalars["Boolean"];
  /** LanguageCourseTranslation.id */
  translationId: Scalars["ID"];
}

export interface BusinessHour {
  __typename?: "BusinessHour";
  dayOfWeek: DayOfWeekType;
  isOpen: Scalars["Boolean"];
  timePeriods?: Maybe<Array<TimePeriod>>;
}

export interface BusinessHourArgs {
  dayOfWeek: DayOfWeekType;
  isOpen: Scalars["Boolean"];
  timePeriods?: InputMaybe<Array<TimePeriodArgs>>;
}

export interface CancelOrderShippingItemInput {
  orderShippingId: Scalars["ID"];
  orderedMerchandiseId: Scalars["ID"];
}

export interface CancelOrderShippingRequestForNonUserInput {
  orderCode: Scalars["String"];
  orderShippingId: Scalars["ID"];
}

export interface CartItem {
  __typename?: "CartItem";
  /** YYYY-MM-DD HH:mm:ss */
  createdAt: Scalars["Date"];
  id: Scalars["ID"];
  /** @deprecated proxyShopHasMerchandise??? isActive ?????????????????? */
  isActive: Scalars["Boolean"];
  /** @deprecated ???????????? ??????????????? ?????? ?????? ?????? */
  isDeleted: Scalars["Boolean"];
  /** @deprecated proxyShopHasMerchandise??? isActive ?????????????????? */
  isValid: Scalars["Boolean"];
  proxyShopHasMerchandise: ProxyShopHasMerchandise;
  proxyShopHasMerchandiseId: Scalars["ID"];
  quantity: Scalars["Int"];
  /** YYYY-MM-DD HH:mm:ss */
  updatedAt: Scalars["Date"];
  user: Member;
  userId: Scalars["ID"];
}

export interface CartItemCreateInput {
  proxyShopHasMerchandiseId: Scalars["ID"];
  quantity: Scalars["Int"];
}

export interface CartItemFilter {
  search?: InputMaybe<Scalars["String"]>;
}

export interface CartItemOrder {
  direction: OrderByDirectionType;
  field: CartItemOrderType;
}

export type CartItemOrderType = "createdAt";

export interface CartItemPage {
  __typename?: "CartItemPage";
  edges: Array<CartItem>;
  totalCount: Scalars["Int"];
}

export interface CartItemPageInput {
  filter?: InputMaybe<CartItemFilter>;
  limit: Scalars["Int"];
  order?: InputMaybe<CartItemOrder>;
  page: Scalars["Int"];
}

export interface Category {
  __typename?: "Category";
  children?: Maybe<Array<Category>>;
  code: Scalars["Int"];
  /** YYYY-MM-DD HH:mm:ss */
  createdAt: Scalars["Date"];
  id: Scalars["ID"];
  parentCode?: Maybe<Scalars["Int"]>;
  priority: Scalars["Int"];
  translations?: Maybe<Array<CategoryTrans>>;
  type: CategoryType;
  /** YYYY-MM-DD HH:mm:ss */
  updatedAt: Scalars["Date"];
}

export interface CategoryTranslationsArgs {
  language?: InputMaybe<LanguageType>;
}

export interface CategoryFilter {
  language?: InputMaybe<LanguageType>;
  name?: InputMaybe<Scalars["String"]>;
  type?: InputMaybe<CategoryType>;
  types?: InputMaybe<Array<CategoryType>>;
}

export interface CategoryOrder {
  direction?: InputMaybe<OrderByDirectionType>;
  field: CategoryOrderFieldType;
}

export type CategoryOrderFieldType = "CREATED_AT" | "PRIORITY";

export interface CategoryPage {
  __typename?: "CategoryPage";
  edges: Array<Category>;
  totalCount: Scalars["Int"];
}

export interface CategoryPageArgs {
  filter?: InputMaybe<CategoryFilter>;
  limit: Scalars["Int"];
  order?: InputMaybe<CategoryOrder>;
  page: Scalars["Int"];
}

export interface CategoryTrans {
  __typename?: "CategoryTrans";
  categoryCode: Scalars["Int"];
  code: Scalars["Int"];
  /** YYYY-MM-DD HH:mm:ss */
  createdAt: Scalars["Date"];
  id: Scalars["ID"];
  language: LanguageType;
  name: Scalars["String"];
  /** YYYY-MM-DD HH:mm:ss */
  updatedAt: Scalars["Date"];
}

export interface CategoryTransArgs {
  language: LanguageType;
  name: Scalars["String"];
}

export type CategoryType =
  | "BLOG"
  | "CITY"
  | "DETAIL_LOCATION"
  | "MAIN_COUPON"
  | "MAIN_CULTURE_AND_NEWS"
  | "MAIN_FAQ"
  | "MAIN_PROXY_SHOPPING"
  | "MAIN_RESERVATION"
  | "MAIN_REVIEW"
  | "MIDDLE_COUPON"
  | "MIDDLE_CULTURE_AND_NEWS"
  | "MIDDLE_FAQ"
  | "MIDDLE_PROXY_SHOPPING"
  | "MIDDLE_RESERVATION"
  | "MIDDLE_REVIEW";

export interface ChangeCartItemQuantityInput {
  id: Scalars["ID"];
  quantity: Scalars["Int"];
}

export interface ChangeMemberLevelArgs {
  code: Scalars["Int"];
  level: MemberRoleType;
}

export interface ChangeMemberThumbnailArgs {
  code: Scalars["Int"];
  url: Scalars["URL"];
}

export interface ChangePartnerPassword {
  code: Scalars["Int"];
  password: Scalars["String"];
}

export interface ChangePasswordArgs {
  changePassword: Scalars["String"];
  currentPassword: Scalars["String"];
}

export interface ChangeReservationDateArgs {
  reservationCode: Scalars["Int"];
  /** YYYY-MM-DD HH:mm:ss */
  reservationDate: Scalars["Date"];
}

export interface ChangeWarehouseInput {
  orderShippingId: Scalars["ID"];
  willBeChangedWarehouseId: Scalars["ID"];
}

export interface CheckCanPurchaseMerchandiseInput {
  proxyShopHasMerchandiseId: Scalars["ID"];
  purchaseQuantity: Scalars["Int"];
}

export interface CompleteMerchandisePreparationInput {
  orderShippingId: Scalars["ID"];
  orderedMerchandiseId: Scalars["ID"];
}

export interface ConfirmLinePayArgs {
  /** ?????? ????????? ????????? ????????? Unique ???????????? (reservation.reservationCode) */
  orderId: Scalars["String"];
  /** ?????? ?????? ????????? ???????????? ?????? ??????(19??????) */
  transactionId: Scalars["ID"];
}

/** deprecated */
export interface ConfirmLinePayInput {
  /** ?????? ????????? ????????? ????????? Unique ???????????? (order.Code) */
  orderCode: Scalars["String"];
  /** ?????? ?????? ????????? ???????????? ?????? ??????(19??????) */
  transactionId: Scalars["String"];
}

export interface ConfirmUserBlogArgs {
  blogCode: Scalars["Int"];
  currency: CurrencyType;
  /** ????????? ??? */
  value: Scalars["Float"];
}

export interface Contract {
  __typename?: "Contract";
  code: Scalars["Int"];
  contractEndDate?: Maybe<Scalars["Date"]>;
  contractStartDate?: Maybe<Scalars["Date"]>;
  contractType: ContractType;
  /** YYYY-MM-DD HH:mm:ss */
  createdAt: Scalars["Date"];
  files?: Maybe<Array<ContractFile>>;
  id: Scalars["ID"];
  isAutomaticExtension: Scalars["Boolean"];
  isSettlement: Scalars["Boolean"];
  merchandises?: Maybe<Array<Merchandise>>;
  partnershipCode: Scalars["Int"];
  settlementDates?: Maybe<Array<Scalars["Int"]>>;
  settlementType: SettlementType;
  specialNote?: Maybe<Scalars["String"]>;
  spots?: Maybe<Array<Spot>>;
  /** YYYY-MM-DD HH:mm:ss */
  updatedAt: Scalars["Date"];
}

export interface ContractFile {
  __typename?: "ContractFile";
  code: Scalars["Int"];
  contractCode: Scalars["Int"];
  /** YYYY-MM-DD HH:mm:ss */
  createdAt: Scalars["Date"];
  id: Scalars["ID"];
  mimetype: Scalars["String"];
  originalName: Scalars["String"];
  /** YYYY-MM-DD HH:mm:ss */
  updatedAt: Scalars["Date"];
  url: Scalars["String"];
}

export type ContractStatusType = "AUTOMATIC_EXTENSION" | "SETTLEMENT";

export type ContractType =
  | "ADVERTISEMENT"
  | "NOT_SELECTED"
  | "ONSITE_DISCOUNT"
  | "PROXY_SHOPPING"
  | "RESERVATION";

export interface CopyLanguageCourseTranslationArgs {
  /** LanguageCourse.id */
  courseId: Scalars["ID"];
  /** ????????? ?????? ?????? */
  name: Scalars["String"];
  /** ????????? ?????? ?????? */
  sourceLanguage: LanguageType;
  /** ?????? ????????? ?????? */
  targetLanguage: LanguageType;
}

export interface Country {
  __typename?: "Country";
  code: Scalars["String"];
  countryCode: Scalars["String"];
  id: Scalars["ID"];
  members: Array<Member>;
  name: Scalars["String"];
}

export type CountryType =
  | "Afghanistan"
  | "AlandIslands"
  | "Albania"
  | "Algeria"
  | "AmericanSamoa"
  | "Andorra"
  | "Angola"
  | "Anguilla"
  | "Antarctica"
  | "AntiguaAndBarbuda"
  | "Argentina"
  | "Armenia"
  | "Aruba"
  | "Australia"
  | "Austria"
  | "Azerbaijan"
  | "Bahamas"
  | "Bahrain"
  | "Bangladesh"
  | "Barbados"
  | "Belarus"
  | "Belgium"
  | "Belize"
  | "Benin"
  | "Bermuda"
  | "Bhutan"
  | "Bolivia"
  | "BonaireSintEustatiusSaba"
  | "BosniaAndHerzegovina"
  | "Botswana"
  | "BouvetIsland"
  | "Brazil"
  | "BritishIndianOceanTerritory"
  | "BruneiDarussalam"
  | "Bulgaria"
  | "BurkinaFaso"
  | "Burundi"
  | "Cambodia"
  | "Cameroon"
  | "Canada"
  | "CapeVerde"
  | "CaymanIslands"
  | "CentralAfricanRepublic"
  | "Chad"
  | "Chile"
  | "China"
  | "ChristmasIsland"
  | "CocosKeelingIslands"
  | "Colombia"
  | "Comoros"
  | "Congo"
  | "CongoDemocraticRepublic"
  | "CookIslands"
  | "CostaRica"
  | "CoteDIvoire"
  | "Croatia"
  | "Cuba"
  | "Cyprus"
  | "CzechRepublic"
  | "Denmark"
  | "Djibouti"
  | "Dominica"
  | "DominicanRepublic"
  | "ETC"
  | "Ecuador"
  | "Egypt"
  | "ElSalvador"
  | "EquatorialGuinea"
  | "Eritrea"
  | "Estonia"
  | "Ethiopia"
  | "FalklandIslands"
  | "FaroeIslands"
  | "Fiji"
  | "Finland"
  | "France"
  | "FrenchGuiana"
  | "FrenchPolynesia"
  | "FrenchSouthernTerritories"
  | "Gabon"
  | "Gambia"
  | "Georgia"
  | "Germany"
  | "Ghana"
  | "Gibraltar"
  | "Greece"
  | "Greenland"
  | "Grenada"
  | "Guadeloupe"
  | "Guam"
  | "Guatemala"
  | "Guernsey"
  | "Guinea"
  | "GuineaBissau"
  | "Guyana"
  | "Haiti"
  | "HeardIslandMcdonaldIslands"
  | "HolySeeVaticanCityState"
  | "Honduras"
  | "HongKong"
  | "Hungary"
  | "Iceland"
  | "India"
  | "Indonesia"
  | "Iran"
  | "Iraq"
  | "Ireland"
  | "IsleOfMan"
  | "Israel"
  | "Italy"
  | "Jamaica"
  | "Japan"
  | "Jersey"
  | "Jordan"
  | "Kazakhstan"
  | "Kenya"
  | "Kiribati"
  | "Korea"
  | "KoreaDemocraticPeoplesRepublic"
  | "Kuwait"
  | "Kyrgyzstan"
  | "LaoPeoplesDemocraticRepublic"
  | "Latvia"
  | "Lebanon"
  | "Lesotho"
  | "Liberia"
  | "LibyanArabJamahiriya"
  | "Liechtenstein"
  | "Lithuania"
  | "Luxembourg"
  | "Macao"
  | "Macedonia"
  | "Madagascar"
  | "Malawi"
  | "Malaysia"
  | "Maldives"
  | "Mali"
  | "Malta"
  | "MarshallIslands"
  | "Martinique"
  | "Mauritania"
  | "Mauritius"
  | "Mayotte"
  | "Mexico"
  | "Micronesia"
  | "Moldova"
  | "Monaco"
  | "Mongolia"
  | "Montenegro"
  | "Montserrat"
  | "Morocco"
  | "Mozambique"
  | "Myanmar"
  | "Namibia"
  | "Nauru"
  | "Nepal"
  | "Netherlands"
  | "NewCaledonia"
  | "NewZealand"
  | "Nicaragua"
  | "Niger"
  | "Nigeria"
  | "Niue"
  | "NorfolkIsland"
  | "NorthernMarianaIslands"
  | "Norway"
  | "Oman"
  | "Pakistan"
  | "Palau"
  | "PalestinianTerritory"
  | "Panama"
  | "PapuaNewGuinea"
  | "Paraguay"
  | "Peru"
  | "Philippines"
  | "Pitcairn"
  | "Poland"
  | "Portugal"
  | "PuertoRico"
  | "Qatar"
  | "Reunion"
  | "Romania"
  | "RussianFederation"
  | "Rwanda"
  | "SaintBarthelemy"
  | "SaintHelena"
  | "SaintKittsAndNevis"
  | "SaintLucia"
  | "SaintMartin"
  | "SaintPierreAndMiquelon"
  | "SaintVincentAndGrenadines"
  | "Samoa"
  | "SanMarino"
  | "SaoTomeAndPrincipe"
  | "SaudiArabia"
  | "Senegal"
  | "Serbia"
  | "Seychelles"
  | "SierraLeone"
  | "Singapore"
  | "SintMaarten"
  | "Slovakia"
  | "Slovenia"
  | "SolomonIslands"
  | "Somalia"
  | "SouthAfrica"
  | "SouthGeorgiaAndSandwichIsl"
  | "SouthSudan"
  | "Spain"
  | "SriLanka"
  | "Sudan"
  | "Suriname"
  | "SvalbardAndJanMayen"
  | "Swaziland"
  | "Sweden"
  | "Switzerland"
  | "SyrianArabRepublic"
  | "Taiwan"
  | "Tajikistan"
  | "Tanzania"
  | "Thailand"
  | "TimorLeste"
  | "Togo"
  | "Tokelau"
  | "Tonga"
  | "TrinidadAndTobago"
  | "Tunisia"
  | "Turkey"
  | "Turkmenistan"
  | "TurksAndCaicosIslands"
  | "Tuvalu"
  | "Uganda"
  | "Ukraine"
  | "UnitedArabEmirates"
  | "UnitedKingdom"
  | "UnitedStates"
  | "UnitedStatesOutlyingIslands"
  | "Uruguay"
  | "Uzbekistan"
  | "Vanuatu"
  | "Venezuela"
  | "VietNam"
  | "VirginIslandsBritish"
  | "VirginIslandsUS"
  | "WallisAndFutuna"
  | "WesternSahara"
  | "Yemen"
  | "Zambia"
  | "Zimbabwe";

export interface Coupon {
  __typename?: "Coupon";
  code: Scalars["Int"];
  /** YYYY-MM-DD HH:mm:ss */
  createdAt: Scalars["Date"];
  description?: Maybe<Scalars["String"]>;
  /** ONSITE coupon?????? ?????? */
  discountDescription?: Maybe<Scalars["String"]>;
  /** ONLINE ????????? RATIO/FIXED, ONSITE ????????? NONE */
  discountType: CouponDiscountType;
  /** ONLINE coupon?????? ?????? */
  discountValue?: Maybe<Scalars["Int"]>;
  expiredAt: Scalars["Date"];
  id: Scalars["ID"];
  imageUrl?: Maybe<Scalars["String"]>;
  isActive: Scalars["Boolean"];
  manager: Member;
  managerCode: Scalars["Int"];
  name: Scalars["String"];
  partnership?: Maybe<Partnership>;
  partnershipCode?: Maybe<Scalars["Int"]>;
  provideCount: Scalars["Int"];
  psdUrl?: Maybe<Scalars["String"]>;
  /** YYYY-MM-DD HH:mm:ss */
  updatedAt: Scalars["Date"];
  usableSpots?: Maybe<Array<Spot>>;
  useType: CouponUseType;
  viewCount: Scalars["Int"];
  /** ?????? ??? ?????? ????????? */
  viewCountByPeriod: Scalars["Int"];
}

export interface CouponProvideCountArgs {
  period?: InputMaybe<PeriodArgs>;
}

export interface CouponViewCountArgs {
  period?: InputMaybe<PeriodArgs>;
}

export interface CouponViewCountByPeriodArgs {
  period?: InputMaybe<PeriodArgs>;
}

export type CouponDiscountType = "FIXED" | "NONE" | "RATIO";

export interface CouponFilter {
  discountType?: InputMaybe<CouponDiscountType>;
  isActive?: InputMaybe<Scalars["Boolean"]>;
  period?: InputMaybe<PeriodArgs>;
  search?: InputMaybe<Scalars["String"]>;
  useType?: InputMaybe<CouponUseType>;
}

export interface CouponOrder {
  direction?: InputMaybe<OrderByDirectionType>;
  field: CouponOrderType;
}

export type CouponOrderType = "CREATED_AT" | "EXPIRED_AT";

export interface CouponPage {
  __typename?: "CouponPage";
  edges: Array<Coupon>;
  totalCount: Scalars["Int"];
}

export interface CouponPageArgs {
  filter?: InputMaybe<CouponFilter>;
  limit: Scalars["Int"];
  order?: InputMaybe<CouponOrder>;
  page: Scalars["Int"];
}

export type CouponUseType = "ONLINE" | "ONSITE";

export interface CreateAdvertisementArgs {
  advertiserName: Scalars["String"];
  period: PeriodArgs;
  type: AdvertisementType;
}

export interface CreateBannerArgs {
  advertiserName: Scalars["String"];
  exposePosition: BannerExposePositionType;
  extraDescription?: InputMaybe<Scalars["String"]>;
  language: LanguageType;
  name: Scalars["String"];
  period: PeriodArgs;
}

export interface CreateBlogArgs {
  cityCategoryCode?: InputMaybe<Scalars["Int"]>;
  language: LanguageType;
  mainCategoryCodes?: InputMaybe<Array<Scalars["Int"]>>;
  middleCategoryCodes?: InputMaybe<Array<Scalars["Int"]>>;
  title: Scalars["String"];
  /** BLOG????????? deprecation?????????. ????????? ????????? ?????????????????? */
  types: Array<BlogType>;
}

export interface CreateCategoryArgs {
  translations: Array<CategoryTransArgs>;
  type: CategoryType;
}

export interface CreateContractToPartnershipArgs {
  /** YYYY-MM-DD */
  contractEndDate: Scalars["Date"];
  /** YYYY-MM-DD */
  contractStartDate: Scalars["Date"];
  contractType: ContractType;
  /** default false */
  isAutomaticExtension?: InputMaybe<Scalars["Boolean"]>;
  /** default false */
  isSettlement?: InputMaybe<Scalars["Boolean"]>;
  partnershipCode: Scalars["Int"];
  /** list of day */
  settlementDates?: InputMaybe<Array<Scalars["Int"]>>;
  settlementType: SettlementType;
  specialNote?: InputMaybe<Scalars["String"]>;
}

export interface CreateDiscountIndividualProxyShopEventArgs {
  eventPrice: Scalars["Int"];
  proxyShopEventId: Scalars["ID"];
  proxyShopHasMerchandiseId: Scalars["ID"];
}

export interface CreateDiscountIndividualSpotEventArgs {
  /** ?????? ?????? */
  baseValue: Scalars["Int"];
  eventCode: Scalars["Int"];
  itemCode: Scalars["Int"];
}

export interface CreateDiscountProxyShopEventArgs {
  description?: InputMaybe<Scalars["String"]>;
  language: LanguageType;
  limitCount?: InputMaybe<Scalars["Int"]>;
  period: PeriodInput;
  proxyShopId: Scalars["ID"];
}

export interface CreateDiscountSpotEventArgs {
  description?: InputMaybe<Scalars["String"]>;
  period: PeriodArgs;
  spotCode: Scalars["Int"];
}

export interface CreateExchangeWithTransArgs {
  address: Scalars["String"];
  translations: Array<ExchangeTransInput>;
}

export interface CreateFaqArgs {
  mainCategoryId: Scalars["Int"];
  middleCategoryId: Scalars["Int"];
  translations: Array<FaqTransArgs>;
}

export interface CreateFileToContractArgs {
  contractCode: Scalars["Int"];
  mimetype: Scalars["String"];
  originalName: Scalars["String"];
  url: Scalars["URL"];
}

export interface CreateFreeShippingProxyShopEventArgs {
  description?: InputMaybe<Scalars["String"]>;
  language: LanguageType;
  limitCount?: InputMaybe<Scalars["Int"]>;
  period: PeriodInput;
  proxyShopId: Scalars["ID"];
}

export interface CreateGetFreeIndividualSpotEventArgs {
  eventCode: Scalars["Int"];
  itemCode: Scalars["Int"];
}

export interface CreateGetFreeProxyShopEventArgs {
  description?: InputMaybe<Scalars["String"]>;
  getFree: GetFreeInput;
  language: LanguageType;
  limitCount?: InputMaybe<Scalars["Int"]>;
  period: PeriodInput;
  proxyShopId: Scalars["ID"];
}

export interface CreateGetFreeSpotEventArgs {
  baseValue: Scalars["Int"];
  description?: InputMaybe<Scalars["String"]>;
  period: PeriodArgs;
  spotCode: Scalars["Int"];
  subValue: Scalars["Int"];
}

export interface CreateGiftIndividualProxyShopEventArgs {
  minimumOrderQuantity: Scalars["Int"];
  proxyShopEventId: Scalars["ID"];
  proxyShopHasMerchandiseId: Scalars["ID"];
}

export interface CreateGiftProxyShopEventArgs {
  description?: InputMaybe<Scalars["String"]>;
  eventGift: EventGiftInput;
  language: LanguageType;
  limitCount?: InputMaybe<Scalars["Int"]>;
  period: PeriodInput;
  proxyShopId: Scalars["ID"];
}

export interface CreateImageToBlogArgs {
  blogCode: Scalars["Int"];
  url: Scalars["URL"];
}

export interface CreateImageToSpotArgs {
  altText?: InputMaybe<Scalars["String"]>;
  spotCode: Scalars["Int"];
  url: Scalars["URL"];
}

export interface CreateImageToSpotItemArgs {
  isMain: Scalars["Boolean"];
  spotItemCode: Scalars["Int"];
  url: Scalars["URL"];
}

export interface CreateIndividualProxyShopEventArgs {
  proxyShopEventId: Scalars["ID"];
  proxyShopHasMerchandiseId: Scalars["ID"];
}

export interface CreateItemToSpotArgs {
  discountPrice?: InputMaybe<Scalars["Float"]>;
  fee?: InputMaybe<Scalars["Float"]>;
  isReservable?: InputMaybe<Scalars["Boolean"]>;
  originalPrice?: InputMaybe<Scalars["Float"]>;
  parentCode?: InputMaybe<Scalars["Int"]>;
  settlementPrice?: InputMaybe<Scalars["Float"]>;
  spotCode: Scalars["Int"];
  translation: CreateItemTransArgs;
}

export interface CreateItemTransArgs {
  description?: InputMaybe<Scalars["String"]>;
  language: LanguageType;
  name: Scalars["String"];
}

export interface CreateLanguageCourseArgs {
  /** ?????? ?????? */
  classType: LanguageCourseClassType;
  /** ?????? ?????? */
  instituteType: LanguageCourseInstituteType;
  translation: CreateLanguageCourseTranslationArgs;
}

export interface CreateLanguageCourseDocumentTransArgs {
  description?: InputMaybe<Scalars["String"]>;
  language: LanguageType;
  name: Scalars["String"];
}

export interface CreateLanguageCourseDormitoryArgs {
  /** LanguageCourse.id */
  courseId: Scalars["ID"];
  language: LanguageType;
  name: Scalars["String"];
}

export interface CreateLanguageCourseRegistrationArgs {
  /** ????????? ???????????? */
  basicInfo: CreateLanguageCourseRegistrationBasicInfoArgs;
  /** LanguageCourse.id */
  courseId: Scalars["ID"];
  currencyType: CurrencyType;
  /** ????????? ???????????? (????????????) */
  groupedRequiredInfos: Array<CreateLanguageCourseRegistrationGroupedRequiredInfoArgs>;
  language: LanguageType;
  /** pc, mobile ?????? ???????????? ?????? */
  platform: Scalars["String"];
  /** ??????????????? ?????? ????????? */
  semesters: Array<CreateLanguageCourseRegistrationSemesterArgs>;
}

export interface CreateLanguageCourseRegistrationBasicInfoArgs {
  /** ???????????? (YYYY-MM-DD) */
  birth: Scalars["Date"];
  /** EMAIL */
  email: Scalars["String"];
  /** ?????? */
  gender: GenderType;
  /** ?????? */
  name: Scalars["String"];
  /** ?????? */
  ownCountry: CountryType;
  /** ?????? ?????? */
  ownCountryAddress: Scalars["String"];
  /** ?????? ???????????? */
  ownCountryTelephone: Scalars["String"];
  /** SNS ID 'type: id' */
  sns: Scalars["String"];
  /** ?????? ??????????????? */
  telephone: Scalars["String"];
}

export interface CreateLanguageCourseRegistrationGroupedRequiredInfoArgs {
  /** LanguageCourseRequiredInfoGroup.id */
  groupId: Scalars["ID"];
  /** LanguageCourseRequiredInfo.id */
  infoIds: Array<Scalars["ID"]>;
  values: Array<Array<Scalars["String"]>>;
}

export interface CreateLanguageCourseRegistrationSemesterArgs {
  /** LanguageCourseSemester.id */
  id: Scalars["ID"];
  /** ?????? ?????? ????????? ?????? ?????? (default: false) */
  requestDormitory?: InputMaybe<Scalars["Boolean"]>;
}

export interface CreateLanguageCourseRequiredDocumentArgs {
  translations: Array<CreateLanguageCourseDocumentTransArgs>;
}

export interface CreateLanguageCourseRequiredInfoArgs {
  /** ????????? ?????? */
  groupId: Scalars["ID"];
  /** ?????? ?????? */
  isRequired?: InputMaybe<Scalars["Boolean"]>;
  translations: Array<CreateLanguageCourseRequiredInfoTransArgs>;
  /** ????????? ?????? */
  type: LanguageCourseRequiredInfoType;
}

export interface CreateLanguageCourseRequiredInfoGroupArgs {
  layoutType: LanguageCourseRequiredInfoGroupLayoutType;
  /** [??? ??????] ?????? ?????? ?????? */
  minimumTableRowCount?: InputMaybe<Scalars["Int"]>;
  translations: Array<CreateLanguageCourseRequiredInfoGroupTransArgs>;
  type: LanguageCourseRequiredInfoGroupType;
}

export interface CreateLanguageCourseRequiredInfoGroupTransArgs {
  language: LanguageType;
  name: Scalars["String"];
}

export interface CreateLanguageCourseRequiredInfoTransArgs {
  /** ?????? */
  description?: InputMaybe<Scalars["String"]>;
  language: LanguageType;
  /** ???????????? ?????? ???????????? */
  name: Scalars["String"];
  /**
   * ????????? ?????? ???????????? ????????? ????????? ????????????
   * (ex. ["?????? ????????? ??????", "????????? ??????", "??????", "?????????", "?????? ?????????"])
   */
  options?: InputMaybe<Array<Scalars["String"]>>;
  /** ????????? ?????? ???????????????(?????????). ????????? ?????? ??? ?????? */
  placeholder?: InputMaybe<Scalars["String"]>;
  /** ?????????2. ????????????????????? ?????? */
  placeholder2?: InputMaybe<Scalars["String"]>;
}

export interface CreateLanguageCourseSemesterArgs {
  coursePeriod: CreatePeriodArgs;
  name: NameInput;
  registrationPeriod: CreatePeriodArgs;
  /** LanguageCourseTranslation.id */
  translationId: Scalars["ID"];
}

export interface CreateLanguageCourseTagInput {
  translations: Array<CreateLanguageCourseTagTranslationInput>;
}

export interface CreateLanguageCourseTagTranslationInput {
  language: LanguageType;
  name: Scalars["String"];
}

export interface CreateLanguageCourseTranslationArgs {
  language: LanguageType;
  /** ????????? ?????? ?????? */
  name: Scalars["String"];
}

export interface CreateOnlineCouponArgs {
  description?: InputMaybe<Scalars["String"]>;
  discountType: CouponDiscountType;
  discountValue: Scalars["Int"];
  expiredAt: Scalars["Date"];
  name: Scalars["String"];
  partnershipCode?: InputMaybe<Scalars["Int"]>;
}

export interface CreateOnsiteCouponArgs {
  description?: InputMaybe<Scalars["String"]>;
  discountDescription: Scalars["String"];
  expiredAt: Scalars["Date"];
  name: Scalars["String"];
  partnershipCode?: InputMaybe<Scalars["Int"]>;
}

export interface CreatePartnerArgs {
  email?: InputMaybe<Scalars["String"]>;
  id: Scalars["String"];
  name?: InputMaybe<Scalars["String"]>;
  password: Scalars["String"];
}

export interface CreatePartnershipArgs {
  accountHolder?: InputMaybe<Scalars["String"]>;
  bank?: InputMaybe<Scalars["String"]>;
  bankAccount?: InputMaybe<Scalars["String"]>;
  businessItem?: InputMaybe<Scalars["String"]>;
  businessRegistrationNumber: Scalars["String"];
  businessType?: InputMaybe<PartnershipBusinessType>;
  companyName: Scalars["String"];
  email?: InputMaybe<Scalars["String"]>;
  /** ?????? ?????? */
  mainCategory: PartnershipMainCategoryType;
  partnerCode?: InputMaybe<Scalars["Float"]>;
  partnerName?: InputMaybe<Scalars["String"]>;
  phone?: InputMaybe<Scalars["String"]>;
  representativeName: Scalars["String"];
  /** ?????? ?????? ????????? ????????? */
  settlementPartnerEmail?: InputMaybe<Scalars["String"]>;
  /** ?????? ?????? ????????? ?????? */
  settlementPartnerName?: InputMaybe<Scalars["String"]>;
  /** ?????? ?????? ????????? ????????? */
  settlementPartnerPhone?: InputMaybe<Scalars["String"]>;
  specialNote?: InputMaybe<Scalars["String"]>;
  /** ?????? ?????? */
  subCategory: PartnershipSubCategoryType;
}

export interface CreatePeriodArgs {
  end: Scalars["Date"];
  start: Scalars["Date"];
}

export interface CreateRequiredInfoTransArgs {
  description?: InputMaybe<Scalars["String"]>;
  language: LanguageType;
  name: Scalars["String"];
}

export interface CreateRequiredInfoWithTransArgs {
  imageUrl?: InputMaybe<Scalars["URL"]>;
  isDefault?: InputMaybe<Scalars["Boolean"]>;
  isFix?: InputMaybe<Scalars["Boolean"]>;
  option?: InputMaybe<Array<Scalars["String"]>>;
  translations: Array<CreateRequiredInfoTransArgs>;
  type: RequiredInfoType;
}

export interface CreateReservationArgs {
  country?: InputMaybe<Scalars["String"]>;
  countryType?: InputMaybe<CountryType>;
  email: Scalars["String"];
  /** ?????? ?????? ????????? ??? ??????, nullable??? ???????????? default ?????? en */
  language?: InputMaybe<LanguageType>;
  name: Scalars["String"];
  paymentCurrency: CurrencyType;
  platform?: InputMaybe<Scalars["String"]>;
  /** YYYY-MM-DD HH:mm:ss */
  reservationDate: Scalars["Date"];
  reservationInfos?: InputMaybe<Array<ReservationInfoCreateInput>>;
  reservationItems: Array<ReservedItemCreateInput>;
  social: Scalars["String"];
  spotCode: Scalars["Int"];
  telephone: Scalars["String"];
  version?: InputMaybe<Scalars["String"]>;
}

export interface CreateSpecialReservableTimeToReservationPolicyArgs {
  reservationPolicyCode: Scalars["Int"];
  specialReservableTime: SpecialReservableTimeArgs;
}

export interface CreateSpotArgs {
  address: Scalars["String"];
  cityCategoryCode: Scalars["Int"];
  latitude: Scalars["Float"];
  longitude: Scalars["Float"];
  mainCategoryCodes: Array<Scalars["Int"]>;
  middleCategoryCodes?: InputMaybe<Array<Scalars["Int"]>>;
  telephone?: InputMaybe<Scalars["String"]>;
  translation: CreateSpotTransArgs;
}

export interface CreateSpotTransArgs {
  language: LanguageType;
  moreInformation: Scalars["String"];
  name: Scalars["String"];
}

export interface CreateTipArgs {
  blogTransCode: Scalars["Int"];
  imageUrl: Scalars["URL"];
  language: LanguageType;
  title: Scalars["String"];
}

export interface CreateTransToAdvertisementArgs {
  advertisementCode: Scalars["Int"];
  description?: InputMaybe<Scalars["String"]>;
  language: LanguageType;
  linkUrl?: InputMaybe<Scalars["String"]>;
  optionalDescription?: InputMaybe<Scalars["String"]>;
  /** ?????? ?????? ?????? */
  priceDescription?: InputMaybe<Scalars["Int"]>;
  title: Scalars["String"];
}

export interface CreateUserBlogArgs {
  cityCategoryCode: Scalars["Int"];
  content: Scalars["String"];
  language: LanguageType;
  mainImageUrl: Scalars["URL"];
  title: Scalars["String"];
}

export interface CreateVoucherInput {
  expiredAt: Scalars["Date"];
  /** Pin voucher is required pin code */
  pin?: InputMaybe<Scalars["String"]>;
  type: VoucherType;
  /** Image voucher is required image url */
  url?: InputMaybe<Scalars["URL"]>;
  voucherTemplateCode: Scalars["Int"];
}

export interface CreateVoucherTemplateArgs {
  name: Scalars["String"];
  partnershipCode: Scalars["Int"];
}

export interface Currency {
  __typename?: "Currency";
  rates: Rates;
  timestamp: Scalars["String"];
}

export interface CurrencyExchangePrice {
  __typename?: "CurrencyExchangePrice";
  buyPrice?: Maybe<Scalars["Float"]>;
  code: Scalars["Int"];
  currency: Scalars["String"];
  id?: Maybe<Scalars["String"]>;
  sellPrice?: Maybe<Scalars["Float"]>;
}

export interface CurrencyExchangePriceArgs {
  buyPrice: Scalars["Float"];
  currency: Scalars["String"];
  sellPrice: Scalars["Float"];
}

export type CurrencyType =
  | "CNY"
  | "HKD"
  | "JPY"
  | "KRW"
  | "THB"
  | "TWD"
  | "USD"
  | "VND";

export type DayOfWeekType =
  | "FRIDAY"
  | "MONDAY"
  | "SATURDAY"
  | "SUNDAY"
  | "THURSDAY"
  | "TUESDAY"
  | "WEDNESDAY";

export interface DefaultIndividualProxyShopEvent
  extends IndividualProxyShopEvent {
  __typename?: "DefaultIndividualProxyShopEvent";
  /** YYYY-MM-DD HH:mm:ss */
  createdAt: Scalars["Date"];
  id: Scalars["ID"];
  proxyShopEventId: Scalars["ID"];
  proxyShopHasMerchandiseId: Scalars["ID"];
  type: IndividualProxyShopEventType;
  /** YYYY-MM-DD HH:mm:ss */
  updatedAt: Scalars["Date"];
}

export interface DeleteAdvertisementTransArgs {
  advertisementCode: Scalars["Int"];
  language: LanguageType;
}

export interface DeleteBlogTransArgs {
  blogCode: Scalars["Int"];
  language: LanguageType;
}

export interface DeleteContractFromPartnershipArgs {
  contractCode: Scalars["Int"];
  partnershipCode: Scalars["Int"];
}

export interface DeleteImageFromBlogArgs {
  blogCode: Scalars["Int"];
  imageCode: Scalars["Int"];
}

export interface DeleteImageFromSpotArgs {
  imageCode: Scalars["Int"];
  spotCode: Scalars["Int"];
}

export interface DeleteImageFromSpotItemArgs {
  imageCode: Scalars["Int"];
  spotItemCode: Scalars["Int"];
}

export interface DeleteIndividualProxyShopEventArgs {
  individualProxyShopEventId: Scalars["ID"];
  proxyShopEventId: Scalars["ID"];
}

export interface DeleteIndividualSpotEventArgs {
  eventCode: Scalars["Int"];
  individualEventCode: Scalars["Int"];
}

export interface DeleteItemFromSpotArgs {
  itemCode: Scalars["Int"];
  parentCode: Scalars["Int"];
  spotCode: Scalars["Int"];
}

export interface DeleteSpecialReservableTimeFromReservationPolicyArgs {
  reservationPolicyCode: Scalars["Int"];
  specialReservableTimeCode: Scalars["Int"];
}

export interface DiscountIndividualProxyShopEvent
  extends IndividualProxyShopEvent {
  __typename?: "DiscountIndividualProxyShopEvent";
  /** YYYY-MM-DD HH:mm:ss */
  createdAt: Scalars["Date"];
  eventPrice: Scalars["Float"];
  id: Scalars["ID"];
  proxyShopEventId: Scalars["ID"];
  proxyShopHasMerchandiseId: Scalars["ID"];
  type: IndividualProxyShopEventType;
  /** YYYY-MM-DD HH:mm:ss */
  updatedAt: Scalars["Date"];
}

export interface DiscountProxyShopEvent extends ProxyShopEvent {
  __typename?: "DiscountProxyShopEvent";
  createdAt: Scalars["Date"];
  description?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  individuals: Array<DiscountIndividualProxyShopEvent>;
  language: LanguageType;
  limitCount?: Maybe<Scalars["Int"]>;
  manager: Member;
  managerId: Scalars["ID"];
  period: PeriodObject;
  proxyShop: ProxyShop;
  proxyShopId: Scalars["ID"];
  status: ProxyShopEventStatus;
  type: ProxyShopEventType;
  updatedAt: Scalars["Date"];
}

export interface Division {
  __typename?: "Division";
  code: Scalars["String"];
  /** YYYY-MM-DD HH:mm:ss */
  createdAt: Scalars["Date"];
  id: Scalars["ID"];
  name: Scalars["String"];
  type: DivisionType;
  /** YYYY-MM-DD HH:mm:ss */
  updatedAt: Scalars["Date"];
}

export interface DivisionCreateInput {
  code: Scalars["String"];
  name: Scalars["String"];
  type: DivisionType;
}

export interface DivisionFilter {
  name?: InputMaybe<Scalars["String"]>;
  type?: InputMaybe<DivisionType>;
}

export interface DivisionOrder {
  direction: OrderByDirectionType;
  field: DivisionOrderType;
}

export type DivisionOrderType = "createdAt";

export interface DivisionPage {
  __typename?: "DivisionPage";
  edges: Array<Division>;
  totalCount: Scalars["Int"];
}

export interface DivisionPageInput {
  filter?: InputMaybe<DivisionFilter>;
  limit: Scalars["Int"];
  order?: InputMaybe<DivisionOrder>;
  page: Scalars["Int"];
}

export interface DivisionSet {
  __typename?: "DivisionSet";
  /** YYYY-MM-DD HH:mm:ss */
  createdAt: Scalars["Date"];
  creatripCode: Scalars["String"];
  customsCategory: Scalars["String"];
  firstDivision: Division;
  firstDivisionId: Scalars["ID"];
  fourthDivision?: Maybe<Division>;
  fourthDivisionId?: Maybe<Scalars["ID"]>;
  hsCode: Scalars["String"];
  id: Scalars["ID"];
  secondDivision?: Maybe<Division>;
  secondDivisionId?: Maybe<Scalars["ID"]>;
  thirdDivision?: Maybe<Division>;
  thirdDivisionId?: Maybe<Scalars["ID"]>;
  /** YYYY-MM-DD HH:mm:ss */
  updatedAt: Scalars["Date"];
}

export interface DivisionSetCreateInput {
  customsCategory: Scalars["String"];
  firstDivisionId: Scalars["ID"];
  fourthDivisionId?: InputMaybe<Scalars["ID"]>;
  hsCode: Scalars["String"];
  secondDivisionId?: InputMaybe<Scalars["ID"]>;
  thirdDivisionId?: InputMaybe<Scalars["ID"]>;
}

export interface DivisionSetFilter {
  search?: InputMaybe<Scalars["String"]>;
}

export interface DivisionSetOrder {
  direction: OrderByDirectionType;
  field: DivisionSetOrderType;
}

export type DivisionSetOrderType = "createdAt";

export interface DivisionSetPage {
  __typename?: "DivisionSetPage";
  edges: Array<DivisionSet>;
  totalCount: Scalars["Int"];
}

export interface DivisionSetPageInput {
  filter?: InputMaybe<DivisionSetFilter>;
  limit: Scalars["Int"];
  order?: InputMaybe<DivisionSetOrder>;
  page: Scalars["Int"];
}

export interface DivisionSetUpdateInput {
  customsCategory?: InputMaybe<Scalars["String"]>;
  firstDivisionId?: InputMaybe<Scalars["ID"]>;
  fourthDivisionId?: InputMaybe<Scalars["ID"]>;
  hsCode?: InputMaybe<Scalars["String"]>;
  id: Scalars["ID"];
  secondDivisionId?: InputMaybe<Scalars["ID"]>;
  thirdDivisionId?: InputMaybe<Scalars["ID"]>;
}

export type DivisionType = "FIRST" | "FOURTH" | "SECOND" | "THIRD";

export interface DivisionUpdateInput {
  id: Scalars["ID"];
  name?: InputMaybe<Scalars["String"]>;
}

export type DormitoryListOrderType =
  | "CREATED_AT"
  | "TRANSLATION_NAME"
  | "UPDATED_AT";

export interface DormitoryPageArgs {
  filter?: InputMaybe<DormitoryPageFilter>;
  order?: InputMaybe<DormitoryPageOrder>;
}

export interface DormitoryPageFilter {
  language?: InputMaybe<LanguageType>;
}

export interface DormitoryPageOrder {
  direction?: InputMaybe<OrderByDirectionType>;
  field?: InputMaybe<DormitoryListOrderType>;
}

export interface EventGiftInput {
  localName: Scalars["String"];
  merchandiseId: Scalars["ID"];
}

export interface EventGiftObject {
  __typename?: "EventGiftObject";
  localName: Scalars["String"];
  merchandise: Merchandise;
  merchandiseId: Scalars["Float"];
}

export interface Exchange {
  __typename?: "Exchange";
  address?: Maybe<Scalars["String"]>;
  code: Scalars["Int"];
  /** YYYY-MM-DD HH:mm:ss */
  createdAt: Scalars["Date"];
  currencyExchangePrices: Array<CurrencyExchangePrice>;
  id: Scalars["ID"];
  isPublish: Scalars["Boolean"];
  orderNumber?: Maybe<Scalars["Int"]>;
  spot?: Maybe<Spot>;
  spotCode?: Maybe<Scalars["Int"]>;
  translations?: Maybe<Array<ExchangeTrans>>;
  /** YYYY-MM-DD HH:mm:ss */
  updatedAt: Scalars["Date"];
}

export interface ExchangeTranslationsArgs {
  language?: InputMaybe<LanguageType>;
}

export interface ExchangeFilter {
  isPublish?: InputMaybe<Scalars["Boolean"]>;
  language?: InputMaybe<LanguageType>;
}

export interface ExchangeOrder {
  direction?: InputMaybe<OrderByDirectionType>;
  field: ExchangeOrderFieldType;
}

export type ExchangeOrderFieldType = "CREATED_AT" | "ORDER_NUMBER";

export interface ExchangePage {
  __typename?: "ExchangePage";
  edges: Array<Exchange>;
  totalCount: Scalars["Int"];
}

export interface ExchangePageArgs {
  filter?: InputMaybe<ExchangeFilter>;
  limit: Scalars["Int"];
  order?: InputMaybe<ExchangeOrder>;
  page: Scalars["Int"];
}

export type ExchangeStatusType = "PUBLISH";

export interface ExchangeTrans {
  __typename?: "ExchangeTrans";
  code: Scalars["Int"];
  /** YYYY-MM-DD HH:mm:ss */
  createdAt: Scalars["Date"];
  exchangeCode: Scalars["Int"];
  id: Scalars["ID"];
  language: LanguageType;
  name: Scalars["String"];
  /** YYYY-MM-DD HH:mm:ss */
  updatedAt: Scalars["Date"];
}

export interface ExchangeTransInput {
  language: LanguageType;
  name: Scalars["String"];
}

export interface Faq {
  __typename?: "Faq";
  categories: Array<Category>;
  /** YYYY-MM-DD HH:mm:ss */
  createdAt: Scalars["Date"];
  id: Scalars["ID"];
  isActive: Scalars["Boolean"];
  mainCategoryId: Scalars["Int"];
  middleCategoryId: Scalars["Int"];
  priority: Scalars["Int"];
  translations?: Maybe<Array<FaqTrans>>;
  /** YYYY-MM-DD HH:mm:ss */
  updatedAt: Scalars["Date"];
}

export interface FaqTranslationsArgs {
  language?: InputMaybe<LanguageType>;
}

export interface FaqFilter {
  isActive?: InputMaybe<Scalars["Boolean"]>;
  language: LanguageType;
  mainCategoryId?: InputMaybe<Scalars["Int"]>;
  middleCategoryId?: InputMaybe<Scalars["Int"]>;
  search?: InputMaybe<Scalars["String"]>;
}

export interface FaqOrder {
  direction: OrderByDirectionType;
  field: FaqOrderType;
}

export type FaqOrderType = "CREATED_AT" | "PRIORITY";

export interface FaqPage {
  __typename?: "FaqPage";
  edges: Array<Faq>;
  totalCount: Scalars["Int"];
}

export interface FaqPageArgs {
  filter?: InputMaybe<FaqFilter>;
  limit: Scalars["Int"];
  order?: InputMaybe<FaqOrder>;
  page: Scalars["Int"];
}

export interface FaqTrans {
  __typename?: "FaqTrans";
  answer?: Maybe<Scalars["String"]>;
  /** YYYY-MM-DD HH:mm:ss */
  createdAt: Scalars["Date"];
  faqId: Scalars["Int"];
  id: Scalars["ID"];
  language: LanguageType;
  question?: Maybe<Scalars["String"]>;
  /** YYYY-MM-DD HH:mm:ss */
  updatedAt: Scalars["Date"];
}

export interface FaqTransArgs {
  answer?: InputMaybe<Scalars["String"]>;
  language: LanguageType;
  question: Scalars["String"];
}

export interface FcmTokenInfo {
  __typename?: "FcmTokenInfo";
  code: Scalars["Int"];
  /** YYYY-MM-DD HH:mm:ss */
  createdAt: Scalars["Date"];
  fcmToken: Scalars["String"];
  id: Scalars["ID"];
  ignoredPushMessageTypeList: Array<NotificationMessageType>;
  /** ????????? ?????? ?????? ??? */
  language: LanguageType;
  /** ??????????????? ?????? relation????????? ???????????? */
  memberCode?: Maybe<Scalars["Int"]>;
  udid: Scalars["String"];
  /** YYYY-MM-DD HH:mm:ss */
  updatedAt: Scalars["Date"];
}

export interface File {
  __typename?: "File";
  createdAt: Scalars["Date"];
  id: Scalars["ID"];
  name: Scalars["String"];
  updatedAt: Scalars["Date"];
  url: Scalars["ImageUrl"];
}

export type FileDomainType =
  | "ADVERTISEMENT"
  | "BANNER"
  | "BLOG"
  | "CONTRACT"
  | "COUPON"
  | "MEMBER"
  | "PROXY_SHOP"
  | "RESERVATION"
  | "RESERVATION_REQUIRED_INFO_ADMIN"
  | "RESERVATION_REQUIRED_INFO_USER"
  | "SPOT"
  | "SPOT_ITEM"
  | "SPOT_REVIEW"
  | "TEMP"
  | "TIP"
  | "VOUCHER";

export interface FreeShippingPolicy {
  __typename?: "FreeShippingPolicy";
  baseValues: Array<FreeShippingPolicyBase>;
  /** YYYY-MM-DD HH:mm:ss */
  createdAt: Scalars["Date"];
  id: Scalars["ID"];
  /** YYYY-MM-DD HH:mm:ss */
  updatedAt: Scalars["Date"];
}

export interface FreeShippingPolicyBase {
  __typename?: "FreeShippingPolicyBase";
  baseValue: Scalars["Float"];
  currency: CurrencyType;
}

export interface FreeShippingPolicyBaseInput {
  baseValue: Scalars["Float"];
  currency: CurrencyType;
}

export interface FreeShippingPolicyUpdateInput {
  baseValues: Array<FreeShippingPolicyBaseInput>;
}

export interface FreeShippingProxyShopEvent extends ProxyShopEvent {
  __typename?: "FreeShippingProxyShopEvent";
  createdAt: Scalars["Date"];
  description?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  individuals: Array<DefaultIndividualProxyShopEvent>;
  language: LanguageType;
  limitCount?: Maybe<Scalars["Int"]>;
  manager: Member;
  managerId: Scalars["ID"];
  period: PeriodObject;
  proxyShop: ProxyShop;
  proxyShopId: Scalars["ID"];
  status: ProxyShopEventStatus;
  type: ProxyShopEventType;
  updatedAt: Scalars["Date"];
}

export type GenderType = "FEMALE" | "MALE";

export interface GeoBoundingBox {
  bottomRight: LatLon;
  topLeft: LatLon;
}

export interface GetFreeInput {
  base: Scalars["Float"];
  free: Scalars["Float"];
}

export interface GetFreeObject {
  __typename?: "GetFreeObject";
  base: Scalars["Float"];
  free: Scalars["Float"];
}

export interface GetFreeProxyShopEvent extends ProxyShopEvent {
  __typename?: "GetFreeProxyShopEvent";
  createdAt: Scalars["Date"];
  description?: Maybe<Scalars["String"]>;
  getFree: GetFreeObject;
  id: Scalars["ID"];
  individuals: Array<DefaultIndividualProxyShopEvent>;
  language: LanguageType;
  limitCount?: Maybe<Scalars["Int"]>;
  manager: Member;
  managerId: Scalars["ID"];
  period: PeriodObject;
  proxyShop: ProxyShop;
  proxyShopId: Scalars["ID"];
  status: ProxyShopEventStatus;
  type: ProxyShopEventType;
  updatedAt: Scalars["Date"];
}

export interface GiftIndividualProxyShopEvent extends IndividualProxyShopEvent {
  __typename?: "GiftIndividualProxyShopEvent";
  /** YYYY-MM-DD HH:mm:ss */
  createdAt: Scalars["Date"];
  id: Scalars["ID"];
  minimumOrderQuantity: Scalars["Int"];
  proxyShopEventId: Scalars["ID"];
  proxyShopHasMerchandiseId: Scalars["ID"];
  type: IndividualProxyShopEventType;
  /** YYYY-MM-DD HH:mm:ss */
  updatedAt: Scalars["Date"];
}

export interface GiftProxyShopEvent extends ProxyShopEvent {
  __typename?: "GiftProxyShopEvent";
  createdAt: Scalars["Date"];
  description?: Maybe<Scalars["String"]>;
  eventGift: EventGiftObject;
  id: Scalars["ID"];
  individuals: Array<GiftIndividualProxyShopEvent>;
  language: LanguageType;
  limitCount?: Maybe<Scalars["Int"]>;
  manager: Member;
  managerId: Scalars["ID"];
  period: PeriodObject;
  proxyShop: ProxyShop;
  proxyShopId: Scalars["ID"];
  status: ProxyShopEventStatus;
  type: ProxyShopEventType;
  updatedAt: Scalars["Date"];
}

export interface GivePointCompensationArgs {
  currency: CurrencyType;
  /** ???????????? ????????? pk??? */
  memberCode: Scalars["Int"];
  /** ?????? ?????? */
  type: PointRewardType;
  /** ?????? ?????? */
  value: Scalars["Float"];
}

export interface Hashtag {
  __typename?: "Hashtag";
  /** YYYY-MM-DD HH:mm:ss */
  createdAt: Scalars["Date"];
  id: Scalars["ID"];
  language: LanguageType;
  name: Scalars["String"];
  /** YYYY-MM-DD HH:mm:ss */
  updatedAt: Scalars["Date"];
}

export interface Header {
  __typename?: "Header";
  name: Scalars["String"];
  value: Scalars["String"];
}

export interface HealthCheck {
  __typename?: "HealthCheck";
  status: Scalars["String"];
}

export interface Image {
  __typename?: "Image";
  altText?: Maybe<Scalars["String"]>;
  blogCode?: Maybe<Scalars["Int"]>;
  code: Scalars["Int"];
  /** YYYY-MM-DD HH:mm:ss */
  createdAt: Scalars["Date"];
  id: Scalars["ID"];
  isMain: Scalars["Boolean"];
  originPath: Scalars["String"];
  priority: Scalars["Int"];
  spotCode?: Maybe<Scalars["Int"]>;
  /** YYYY-MM-DD HH:mm:ss */
  updatedAt: Scalars["Date"];
  url: Scalars["String"];
}

export interface IncomingMerchandise {
  __typename?: "IncomingMerchandise";
  cancelMember?: Maybe<Member>;
  cancelMemberId?: Maybe<Scalars["ID"]>;
  canceledAt?: Maybe<Scalars["Date"]>;
  code: Scalars["String"];
  /** YYYY-MM-DD HH:mm:ss */
  createdAt: Scalars["Date"];
  /** ????????? - ?????????(?????????),???????????? ????????????(?????? ????????????????????????) null?????? */
  deliveryTime?: Maybe<Scalars["Int"]>;
  description?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  manager?: Maybe<Member>;
  managerId?: Maybe<Scalars["ID"]>;
  merchandise: Merchandise;
  merchandiseId: Scalars["ID"];
  merchandiseInAndOutLinks?: Maybe<Array<MerchandiseInAndOutLink>>;
  partnership?: Maybe<Partnership>;
  partnershipId?: Maybe<Scalars["ID"]>;
  paymentMethodType: IncomingMerchandisePaymentMethodType;
  purchaseUrl?: Maybe<Scalars["String"]>;
  quantity: Scalars["Int"];
  receivedAt?: Maybe<Scalars["Date"]>;
  receivedQuantity: Scalars["Int"];
  remainQuantity: Scalars["Int"];
  status: IncomingMerchandiseStatusType;
  type: IncomingMerchandiseType;
  unitPrice: Scalars["Int"];
  /** YYYY-MM-DD HH:mm:ss */
  updatedAt: Scalars["Date"];
  validity?: Maybe<Scalars["Date"]>;
  warehouse: Warehouse;
  warehouseId: Scalars["ID"];
}

export interface IncomingMerchandiseCancelInput {
  description?: InputMaybe<Scalars["String"]>;
  id: Scalars["ID"];
}

export interface IncomingMerchandiseCreateInput {
  description?: InputMaybe<Scalars["String"]>;
  merchandiseId: Scalars["ID"];
  partnershipId?: InputMaybe<Scalars["ID"]>;
  paymentMethodType: IncomingMerchandisePaymentMethodType;
  purchaseUrl?: InputMaybe<Scalars["String"]>;
  quantity: Scalars["Int"];
  unitPrice: Scalars["Int"];
  warehouseId: Scalars["ID"];
}

export interface IncomingMerchandiseFilter {
  createdAt?: InputMaybe<PeriodInput>;
  merchandiseType?: InputMaybe<MerchandiseType>;
  paymentMethodType?: InputMaybe<IncomingMerchandisePaymentMethodType>;
  search?: InputMaybe<Scalars["String"]>;
  status?: InputMaybe<IncomingMerchandiseStatusType>;
  type?: InputMaybe<IncomingMerchandiseType>;
  warehouseId?: InputMaybe<Scalars["ID"]>;
}

export interface IncomingMerchandiseOrder {
  direction: OrderByDirectionType;
  field: IncomingMerchandiseOrderType;
}

export type IncomingMerchandiseOrderType = "createdAt" | "validity";

export interface IncomingMerchandisePage {
  __typename?: "IncomingMerchandisePage";
  edges: Array<IncomingMerchandise>;
  totalCount: Scalars["Int"];
}

export interface IncomingMerchandisePageInput {
  filter?: InputMaybe<IncomingMerchandiseFilter>;
  limit: Scalars["Int"];
  order?: InputMaybe<IncomingMerchandiseOrder>;
  page: Scalars["Int"];
}

/** ?????? ????????? ?????? ???????????? ???????????? ???????????? type */
export type IncomingMerchandisePaymentMethodType = "CARD" | "DRAFT" | "NONE";

export interface IncomingMerchandiseReceiveInput {
  id: Scalars["ID"];
  quantity?: InputMaybe<Scalars["Int"]>;
  validity?: InputMaybe<Scalars["Date"]>;
}

export type IncomingMerchandiseStatusType =
  | "CANCELED"
  | "COMPLETED"
  | "IN_PROGRESS"
  | "PARTIAL_RECEIVE";

export type IncomingMerchandiseType = "MOVEMENT" | "PURCHASE";

export interface IncomingMerchandiseUpdateInput {
  description?: InputMaybe<Scalars["String"]>;
  id: Scalars["ID"];
}

export interface IndividualProxyShopEvent {
  /** YYYY-MM-DD HH:mm:ss */
  createdAt: Scalars["Date"];
  id: Scalars["ID"];
  proxyShopEventId: Scalars["ID"];
  proxyShopHasMerchandiseId: Scalars["ID"];
  type: IndividualProxyShopEventType;
  /** YYYY-MM-DD HH:mm:ss */
  updatedAt: Scalars["Date"];
}

export type IndividualProxyShopEventType = "DEFAULT" | "DISCOUNT" | "GIFT";

export interface IndividualShippingPolicy {
  __typename?: "IndividualShippingPolicy";
  /** YYYY-MM-DD HH:mm:ss */
  createdAt: Scalars["Date"];
  division: Scalars["String"];
  height?: Maybe<Scalars["Int"]>;
  id: Scalars["ID"];
  length?: Maybe<Scalars["Int"]>;
  setPrice: Scalars["Int"];
  shippingPolicyId: Scalars["ID"];
  unitPrice: Scalars["Int"];
  /** YYYY-MM-DD HH:mm:ss */
  updatedAt: Scalars["Date"];
  weight: Scalars["Int"];
  width?: Maybe<Scalars["Int"]>;
}

export interface IndividualShippingPolicyCreateInput {
  division?: InputMaybe<Scalars["String"]>;
  height?: InputMaybe<Scalars["Int"]>;
  length?: InputMaybe<Scalars["Int"]>;
  setPrice: Scalars["Int"];
  shippingPolicyId: Scalars["ID"];
  unitPrice: Scalars["Int"];
  weight: Scalars["Int"];
  width?: InputMaybe<Scalars["Int"]>;
}

export interface IndividualShippingPolicyUpdateInput {
  division?: InputMaybe<Scalars["String"]>;
  height?: InputMaybe<Scalars["Int"]>;
  id: Scalars["ID"];
  length?: InputMaybe<Scalars["Int"]>;
  setPrice?: InputMaybe<Scalars["Int"]>;
  unitPrice?: InputMaybe<Scalars["Int"]>;
  weight?: InputMaybe<Scalars["Int"]>;
  width?: InputMaybe<Scalars["Int"]>;
}

export interface IndividualSpotEvent {
  __typename?: "IndividualSpotEvent";
  /** ?????? ???????????? ?????? ?????? ?????? */
  baseValue?: Maybe<Scalars["Int"]>;
  code: Scalars["Int"];
  /** YYYY-MM-DD HH:mm:ss */
  createdAt: Scalars["Date"];
  event: SpotEvent;
  id: Scalars["ID"];
  item: SpotItem;
  /** YYYY-MM-DD HH:mm:ss */
  updatedAt: Scalars["Date"];
}

export type IntegratedReview = BlogReview | ProxyShopReview | SpotReview;

export interface IntegratedReviewArgs {
  domain?: InputMaybe<ReviewDomainType>;
  limit: Scalars["Int"];
  page: Scalars["Int"];
}

export interface IssueVouchersToReservationArgs {
  quantity: Scalars["Int"];
  reservationCode: Scalars["Int"];
  voucherTemplateCode: Scalars["Int"];
}

export interface LanguageCourse {
  __typename?: "LanguageCourse";
  cityCategory?: Maybe<Category>;
  classType: LanguageCourseClassType;
  createdAt: Scalars["Date"];
  detailLocationCategory?: Maybe<Category>;
  dormitoryInfo: LanguageCourseDormitoryInfo;
  homepage?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  instituteType: LanguageCourseInstituteType;
  isFemaleCollege: Scalars["Boolean"];
  isLiked: Scalars["Boolean"];
  likeCount: Scalars["Int"];
  mainImageUrl?: Maybe<Scalars["ImageUrl"]>;
  partnership?: Maybe<Partnership>;
  reviewCount: Scalars["Float"];
  reviewRatingAverage?: Maybe<Scalars["Float"]>;
  reviews: Array<LanguageCourseReview>;
  totalReviewRate: Scalars["Int"];
  translations: Array<LanguageCourseTranslation>;
  updatedAt: Scalars["Date"];
  viewCount: Scalars["Int"];
}

export interface LanguageCourseTranslationsArgs {
  language?: InputMaybe<LanguageType>;
}

export interface LanguageCourseAddressInfo {
  __typename?: "LanguageCourseAddressInfo";
  address?: Maybe<Scalars["String"]>;
  zipcode?: Maybe<Scalars["String"]>;
}

export interface LanguageCourseApplicationFee {
  __typename?: "LanguageCourseApplicationFee";
  isActive: Scalars["Boolean"];
  originalPrice?: Maybe<Scalars["Float"]>;
  sellPrice?: Maybe<Scalars["Float"]>;
}

export interface LanguageCourseApplicationFeeOriginalPriceArgs {
  currency: CurrencyType;
}

export interface LanguageCourseApplicationFeeSellPriceArgs {
  currency: CurrencyType;
}

export interface LanguageCourseClassFee {
  __typename?: "LanguageCourseClassFee";
  originalPrice?: Maybe<Scalars["Float"]>;
  sellPrice?: Maybe<Scalars["Float"]>;
}

export interface LanguageCourseClassFeeOriginalPriceArgs {
  currency: CurrencyType;
}

export interface LanguageCourseClassFeeSellPriceArgs {
  currency: CurrencyType;
}

export type LanguageCourseClassType =
  | "ONLINE"
  | "REGULAR"
  | "SHORT"
  | "VACATION";

export type LanguageCourseDocumentOrderType = "CREATED_AT" | "UPDATE_AT";

export interface LanguageCourseDormitory {
  __typename?: "LanguageCourseDormitory";
  createdAt: Scalars["Date"];
  id: Scalars["ID"];
  translations: Array<LanguageCourseDormitoryTranslation>;
  updatedAt: Scalars["Date"];
}

export interface LanguageCourseDormitoryTranslationsArgs {
  language?: InputMaybe<LanguageType>;
}

export interface LanguageCourseDormitoryFee {
  __typename?: "LanguageCourseDormitoryFee";
  createdAt: Scalars["Date"];
  dormitory: LanguageCourseDormitory;
  id: Scalars["ID"];
  isActive: Scalars["Boolean"];
  originalPrice?: Maybe<Scalars["Float"]>;
  sellPrice?: Maybe<Scalars["Float"]>;
  semester: LanguageCourseSemester;
  /** LanguageCourseSemester.id */
  semesterId: Scalars["ID"];
  updatedAt: Scalars["Date"];
}

export interface LanguageCourseDormitoryFeeOriginalPriceArgs {
  currency: CurrencyType;
}

export interface LanguageCourseDormitoryFeeSellPriceArgs {
  currency: CurrencyType;
}

export interface LanguageCourseDormitoryInfo {
  __typename?: "LanguageCourseDormitoryInfo";
  courseId: Scalars["ID"];
  createdAt: Scalars["Date"];
  dormitories: LanguageCourseDormitoryPage;
  homepage?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  manager: LanguageCourseManager;
  updatedAt: Scalars["Date"];
}

export interface LanguageCourseDormitoryInfoDormitoriesArgs {
  input?: InputMaybe<DormitoryPageArgs>;
}

export interface LanguageCourseDormitoryPage {
  __typename?: "LanguageCourseDormitoryPage";
  edges: Array<LanguageCourseDormitory>;
  totalCount: Scalars["Int"];
}

export interface LanguageCourseDormitoryTranslation {
  __typename?: "LanguageCourseDormitoryTranslation";
  createdAt: Scalars["Date"];
  id: Scalars["ID"];
  language: LanguageType;
  name: Scalars["String"];
  updatedAt: Scalars["Date"];
}

export interface LanguageCourseHasRequiredDocument {
  __typename?: "LanguageCourseHasRequiredDocument";
  createdAt: Scalars["Date"];
  document: LanguageCourseRequiredDocument;
  /** LanguageCourseRequiredDocument.id */
  documentId: Scalars["ID"];
  id: Scalars["ID"];
  /** true: ????????? ?????? (default), false: ???????????? ?????? */
  isOnlineAvailable: Scalars["Boolean"];
  templateFile?: Maybe<File>;
  updatedAt: Scalars["Date"];
}

export interface LanguageCourseHasRequiredInfo {
  __typename?: "LanguageCourseHasRequiredInfo";
  createdAt: Scalars["Date"];
  id: Scalars["ID"];
  info: LanguageCourseRequiredInfo;
  /** LanguageCourseRequiredInfo.id */
  infoId: Scalars["ID"];
  updatedAt: Scalars["Date"];
}

export type LanguageCourseInstituteType = "PRIVATE" | "UNIVERSITY";

export interface LanguageCourseManager {
  __typename?: "LanguageCourseManager";
  email?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  telephone?: Maybe<Scalars["String"]>;
}

export interface LanguageCoursePage {
  __typename?: "LanguageCoursePage";
  edges: Array<LanguageCourse>;
  totalCount: Scalars["Int"];
}

export interface LanguageCoursePageArgs {
  filter: LanguageCoursePageFilter;
  limit: Scalars["Int"];
  order?: InputMaybe<LanguageCoursePageOrder>;
  page: Scalars["Int"];
}

export interface LanguageCoursePageFilter {
  /**
   * true: ????????? ??????????????? ???????????? ????????? ???????????? ?????????, ?????? ????????? ???????????? ????????? ??????????????? ?????????
   * false: ????????? ??????????????? ???????????? ????????? ????????? ?????????, ????????? ????????? ???????????? ?????? ??????
   */
  applicable?: InputMaybe<Scalars["Boolean"]>;
  cityCategoryId?: InputMaybe<Scalars["ID"]>;
  classTypes?: InputMaybe<Array<LanguageCourseClassType>>;
  instituteTypes?: InputMaybe<Array<LanguageCourseInstituteType>>;
  isPublish?: InputMaybe<Scalars["Boolean"]>;
  language: LanguageType;
  search?: InputMaybe<Scalars["String"]>;
}

export interface LanguageCoursePageOrder {
  direction?: InputMaybe<OrderByDirectionType>;
  field?: InputMaybe<LanguageCoursePageOrderType>;
}

export type LanguageCoursePageOrderType =
  | "CREATED_AT"
  | "LIKE_COUNT"
  | "RENEWAL_DATE"
  | "UPDATED_AT"
  | "VIEW_COUNT";

export interface LanguageCourseRegistration {
  __typename?: "LanguageCourseRegistration";
  basicInfo: LanguageCourseRegistrationBasicInfo;
  createdAt: Scalars["Date"];
  currencyType: CurrencyType;
  /** ??????????????? ???????????? ?????? ???????????? ?????? ??? */
  description: Scalars["String"];
  documents: Array<LanguageCourseRegistrationRequiredDocument>;
  groupedInfos: Array<LanguageCourseRegistrationGroupedRequiredInfo>;
  id: Scalars["ID"];
  /** ?????? ????????? ?????? ?????? ?????? ?????? (?????? ????????? false ??? ?????????) */
  isMailSent: Scalars["Boolean"];
  /** ??????????????? webpage language */
  language: LanguageType;
  /** ?????? ????????? ?????? ????????? ????????? datetime */
  mailSentDate?: Maybe<Scalars["Date"]>;
  /** ????????? ????????? */
  modifiedAdmin?: Maybe<Member>;
  /** ????????? ???????????? pk */
  modifiedAdminId: Scalars["ID"];
  name: Name;
  /** pc, mobile ?????? ????????? ?????? */
  platform: Scalars["String"];
  /**
   * ?????? ??? ????????? ?????? ?????? ??????.
   * ex) ?????????, ????????????
   */
  postPassPaymentInfo: LanguageCourseRegistrationPaymentInfo;
  /**
   * ?????? ??? ????????? ?????? ?????? ??????.
   * ex) ?????????
   */
  prePassPaymentInfo: LanguageCourseRegistrationPaymentInfo;
  /** ????????? ????????? ?????? */
  registerer?: Maybe<Member>;
  /** ????????? ????????? ?????? pk */
  registererId: Scalars["ID"];
  /** ????????? */
  registrationDate?: Maybe<Scalars["Date"]>;
  /** ?????? ????????? ?????? */
  review: LanguageCourseReview;
  /** ????????? ?????? ????????? */
  semesters: Array<LanguageCourseRegistrationSemester>;
  status: LanguageCourseRegistrationStatusType;
  updatedAt: Scalars["Date"];
}

export interface LanguageCourseRegistrationBasicInfo {
  __typename?: "LanguageCourseRegistrationBasicInfo";
  /** ???????????? (YYYY-MM-DD) */
  birth: Scalars["Date"];
  email: Scalars["String"];
  /** ?????? */
  gender: GenderType;
  /** ?????? */
  name: Scalars["String"];
  ownCountry: CountryType;
  /** ?????? ?????? */
  ownCountryAddress: Scalars["String"];
  /** ?????? ???????????? */
  ownCountryTelephone: Scalars["String"];
  /** ex) line - creatrip */
  sns: Scalars["String"];
  /** ?????? ??????????????? */
  telephone: Scalars["String"];
}

export interface LanguageCourseRegistrationFilter {
  registrationDatePeriod?: InputMaybe<PeriodArgs>;
  search?: InputMaybe<Scalars["String"]>;
  status?: InputMaybe<LanguageCourseRegistrationStatusType>;
}

export interface LanguageCourseRegistrationGroupedRequiredInfo {
  __typename?: "LanguageCourseRegistrationGroupedRequiredInfo";
  createdAt: Scalars["Date"];
  /** LanguageCourseRequiredInfoGroup.id */
  groupId: Scalars["ID"];
  id: Scalars["ID"];
  infos: Array<LanguageCourseRegistrationRequiredInfo>;
  layoutType: LanguageCourseRequiredInfoGroupLayoutType;
  name: Name;
  type: LanguageCourseRequiredInfoGroupType;
  updatedAt: Scalars["Date"];
  values: Array<Array<Scalars["String"]>>;
}

export type LanguageCourseRegistrationItemType =
  | "APPLICATION"
  | "COURSE"
  | "DORMITORY";

export interface LanguageCourseRegistrationOrder {
  direction: OrderByDirectionType;
  field: LanguageCourseRegistrationPageOrderType;
}

export interface LanguageCourseRegistrationPage {
  __typename?: "LanguageCourseRegistrationPage";
  edges: Array<LanguageCourseRegistration>;
  totalCount: Scalars["Int"];
}

export interface LanguageCourseRegistrationPageInput {
  filter?: InputMaybe<LanguageCourseRegistrationFilter>;
  limit: Scalars["Int"];
  order?: InputMaybe<LanguageCourseRegistrationOrder>;
  page: Scalars["Int"];
}

export type LanguageCourseRegistrationPageOrderType = "CREATED_AT";

export interface LanguageCourseRegistrationPaymentInfo {
  __typename?: "LanguageCourseRegistrationPaymentInfo";
  actualPaymentPrice: PaymentPriceInfo;
  /** ????????? ???????????? ???????????? ?????? ????????? (PaymentTransaction.domainTransactionId) */
  id: Scalars["String"];
  items: Array<LanguageCourseRegistrationPaymentItem>;
  paymentTransaction?: Maybe<PaymentTransaction>;
  totalPrice: PaymentPriceInfo;
  usedPoint: PaymentPriceInfo;
}

export interface LanguageCourseRegistrationPaymentItem {
  __typename?: "LanguageCourseRegistrationPaymentItem";
  createdAt: Scalars["Date"];
  id: Scalars["ID"];
  name: Name;
  originalPrice: PaymentPriceInfo;
  sellPrice: PaymentPriceInfo;
  type: LanguageCourseRegistrationItemType;
  updatedAt: Scalars["Date"];
}

export interface LanguageCourseRegistrationRequiredDocument {
  __typename?: "LanguageCourseRegistrationRequiredDocument";
  createdAt: Scalars["Date"];
  /** ??? ???????????? ????????? ?????? ????????? ????????? ??? ??? ?????? */
  files: Array<File>;
  id: Scalars["ID"];
  isPass: Scalars["Boolean"];
  koreanName: Scalars["String"];
  localName: Scalars["String"];
  updatedAt: Scalars["Date"];
}

export interface LanguageCourseRegistrationRequiredInfo {
  __typename?: "LanguageCourseRegistrationRequiredInfo";
  /** LanguageCourseRequiredInfo.id */
  infoId: Scalars["ID"];
  isRequired: Scalars["Boolean"];
  name: Name;
  type: LanguageCourseRequiredInfoType;
}

export interface LanguageCourseRegistrationSemester {
  __typename?: "LanguageCourseRegistrationSemester";
  coursePeriod: Period;
  createdAt: Scalars["Date"];
  id: Scalars["ID"];
  /** ????????? */
  name: Name;
  registrationPeriod: Period;
  /** ????????? ?????? ?????? */
  requestDormitory: Scalars["Boolean"];
  updatedAt: Scalars["Date"];
}

export type LanguageCourseRegistrationStatusType =
  | "CANCELED"
  | "CANCEL_REQUESTED"
  | "COMPLETED"
  | "EVALUATING"
  | "PREPARING_PAYMENT"
  | "REJECTED"
  | "WAITING_COMPLETE"
  | "WAITING_FOR_PROCESS_REGISTRATION"
  | "WAITING_PAYMENT"
  | "WRITING";

export interface LanguageCourseRequiredDocument {
  __typename?: "LanguageCourseRequiredDocument";
  createdAt: Scalars["Date"];
  id: Scalars["ID"];
  translations: Array<LanguageCourseRequiredDocumentTranslation>;
  updatedAt: Scalars["Date"];
}

export interface LanguageCourseRequiredDocumentTranslationsArgs {
  language?: InputMaybe<LanguageType>;
}

export interface LanguageCourseRequiredDocumentFilter {
  language: LanguageType;
  search?: InputMaybe<Scalars["String"]>;
}

export interface LanguageCourseRequiredDocumentOrder {
  direction?: InputMaybe<OrderByDirectionType>;
  field?: InputMaybe<LanguageCourseDocumentOrderType>;
}

export interface LanguageCourseRequiredDocumentPage {
  __typename?: "LanguageCourseRequiredDocumentPage";
  edges: Array<LanguageCourseRequiredDocument>;
  totalCount: Scalars["Int"];
}

export interface LanguageCourseRequiredDocumentPageArgs {
  filter: LanguageCourseRequiredDocumentFilter;
  limit: Scalars["Int"];
  order?: InputMaybe<LanguageCourseRequiredDocumentOrder>;
  page: Scalars["Int"];
}

export interface LanguageCourseRequiredDocumentTranslation {
  __typename?: "LanguageCourseRequiredDocumentTranslation";
  createdAt: Scalars["Date"];
  description?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  language: LanguageType;
  name: Scalars["String"];
  updatedAt: Scalars["Date"];
}

export interface LanguageCourseRequiredInfo {
  __typename?: "LanguageCourseRequiredInfo";
  createdAt: Scalars["Date"];
  group: LanguageCourseRequiredInfoGroup;
  /** LanguageCourseRequiredInfoGroup.id */
  groupId: Scalars["ID"];
  id: Scalars["ID"];
  isRequired: Scalars["Boolean"];
  priority: Scalars["Int"];
  translations: Array<LanguageCourseRequiredInfoTranslation>;
  type: LanguageCourseRequiredInfoType;
  updatedAt: Scalars["Date"];
}

export interface LanguageCourseRequiredInfoTranslationsArgs {
  language?: InputMaybe<LanguageType>;
}

export interface LanguageCourseRequiredInfoGroup {
  __typename?: "LanguageCourseRequiredInfoGroup";
  createdAt: Scalars["Date"];
  id: Scalars["ID"];
  infos: Array<LanguageCourseRequiredInfo>;
  layoutType: LanguageCourseRequiredInfoGroupLayoutType;
  /** ????????? ???????????? ?????? ????????? row ??? */
  minimumTableRowCount: Scalars["Int"];
  priority: Scalars["Int"];
  translations: Array<LanguageCourseRequiredInfoGroupTranslation>;
  type: LanguageCourseRequiredInfoGroupType;
  updatedAt: Scalars["Date"];
}

export interface LanguageCourseRequiredInfoGroupTranslationsArgs {
  language?: InputMaybe<LanguageType>;
}

export type LanguageCourseRequiredInfoGroupLayoutType = "BASIC" | "TABLE";

export interface LanguageCourseRequiredInfoGroupListFilterArgs {
  language: LanguageType;
  layoutType?: InputMaybe<LanguageCourseRequiredInfoGroupLayoutType>;
  search?: InputMaybe<Scalars["String"]>;
  type?: InputMaybe<LanguageCourseRequiredInfoGroupType>;
}

export interface LanguageCourseRequiredInfoGroupTranslation {
  __typename?: "LanguageCourseRequiredInfoGroupTranslation";
  createdAt: Scalars["Date"];
  id: Scalars["ID"];
  language: LanguageType;
  name: Scalars["String"];
  updatedAt: Scalars["Date"];
}

export type LanguageCourseRequiredInfoGroupType =
  | "ACADEMIC_ABILITY"
  | "EXTRA"
  | "FINANCIAL"
  | "PERSONAL"
  | "VISA";

export interface LanguageCourseRequiredInfoTranslation {
  __typename?: "LanguageCourseRequiredInfoTranslation";
  createdAt: Scalars["Date"];
  description?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  language: LanguageType;
  name: Scalars["String"];
  options?: Maybe<Array<Scalars["String"]>>;
  placeholder?: Maybe<Scalars["String"]>;
  placeholder2?: Maybe<Scalars["String"]>;
  updatedAt: Scalars["Date"];
}

export type LanguageCourseRequiredInfoType =
  | "CONDITIONAL"
  | "DATE_DAY"
  | "DATE_MONTH"
  | "LIST"
  | "MULTI_LINE_TEXT"
  | "PERIOD_DATE_DAY"
  | "PERIOD_DATE_MONTH"
  | "SINGLE_LINE_TEXT";

export interface LanguageCourseReview {
  __typename?: "LanguageCourseReview";
  createdAt: Scalars["Date"];
  id: Scalars["ID"];
  images: Array<LanguageCourseReviewImage>;
  starRating: Scalars["Int"];
  updatedAt: Scalars["Date"];
  writer?: Maybe<Member>;
  writerId: Scalars["ID"];
}

export interface LanguageCourseReviewImage {
  __typename?: "LanguageCourseReviewImage";
  createdAt: Scalars["Date"];
  id: Scalars["ID"];
  imageUrl: Scalars["String"];
  priority: Scalars["Int"];
  review: LanguageCourseReview;
  reviewId: Scalars["ID"];
  updatedAt: Scalars["Date"];
}

export interface LanguageCourseSemester {
  __typename?: "LanguageCourseSemester";
  classFee: LanguageCourseClassFee;
  coursePeriod: Period;
  createdAt: Scalars["Date"];
  dormitoryFees: Array<LanguageCourseDormitoryFee>;
  id: Scalars["ID"];
  name: Name;
  registrationPeriod: Period;
  status: LanguageCourseSemesterStatus;
  updatedAt: Scalars["Date"];
}

/** ????????? ?????? ?????? ?????? ?????? */
export type LanguageCourseSemesterOrderType =
  | "COURSE_END"
  | "COURSE_START"
  | "REGISTRATION_END"
  | "REGISTRATION_START";

export interface LanguageCourseSemesterPage {
  __typename?: "LanguageCourseSemesterPage";
  edges: Array<LanguageCourseSemester>;
  totalCount: Scalars["Int"];
}

export interface LanguageCourseSemesterPageArgs {
  filter?: InputMaybe<LanguageCourseSemesterPageFilter>;
  order?: InputMaybe<LanguageCourseSemesterPageOrder>;
}

export interface LanguageCourseSemesterPageFilter {
  /**
   * true: ????????? ??????????????? ???????????? ????????? ???????????? ?????????, ?????? ????????? ???????????? ????????? ??????????????? ?????????
   * false: ????????? ??????????????? ???????????? ????????? ????????? ?????????, ????????? ????????? ???????????? ?????? ??????
   */
  applicable?: InputMaybe<Scalars["Boolean"]>;
}

/** ????????? ?????? ?????? ?????? */
export interface LanguageCourseSemesterPageOrder {
  direction?: InputMaybe<OrderByDirectionType>;
  field?: InputMaybe<LanguageCourseSemesterOrderType>;
}

/** ????????? ?????? ?????? ?????? */
export type LanguageCourseSemesterStatus =
  | "APPLICABLE"
  | "APPLICABLE_TOGETHER"
  | "EXPIRED";

export interface LanguageCourseTag {
  __typename?: "LanguageCourseTag";
  createdAt: Scalars["Date"];
  id: Scalars["ID"];
  translations: Array<LanguageCourseTagTranslation>;
  updatedAt: Scalars["Date"];
}

export interface LanguageCourseTagTranslationsArgs {
  language?: InputMaybe<LanguageType>;
}

export type LanguageCourseTagOrderType = "CREATED_AT" | "UPDATED_AT";

export interface LanguageCourseTagPage {
  __typename?: "LanguageCourseTagPage";
  edges: Array<LanguageCourseTag>;
  totalCount: Scalars["Int"];
}

export interface LanguageCourseTagPageFilterInput {
  language: LanguageType;
  search?: InputMaybe<Scalars["String"]>;
}

export interface LanguageCourseTagPageInput {
  filter?: InputMaybe<LanguageCourseTagPageFilterInput>;
  limit: Scalars["Int"];
  order?: InputMaybe<LanguageCourseTagPageOrderInput>;
  page: Scalars["Int"];
}

export interface LanguageCourseTagPageOrderInput {
  direction?: InputMaybe<OrderByDirectionType>;
  field?: InputMaybe<LanguageCourseTagOrderType>;
}

export interface LanguageCourseTagTranslation {
  __typename?: "LanguageCourseTagTranslation";
  createdAt: Scalars["Date"];
  id: Scalars["ID"];
  language: LanguageType;
  name: Scalars["String"];
  updatedAt: Scalars["Date"];
}

export interface LanguageCourseTranslation {
  __typename?: "LanguageCourseTranslation";
  addressInfo: LanguageCourseAddressInfo;
  /** ?????? ?????? ????????? ?????? ??? */
  applicableSemesterCount: Scalars["Int"];
  applicationFee: LanguageCourseApplicationFee;
  courseInfo: Scalars["String"];
  courseManager: LanguageCourseManager;
  createdAt: Scalars["Date"];
  creator?: Maybe<Member>;
  /** @deprecated ????????? */
  hashtags: Array<Scalars["String"]>;
  homepage?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  isPublish: Scalars["Boolean"];
  language: LanguageType;
  manager?: Maybe<Member>;
  /** ?????????????????? */
  minimumRegisterCourseCount: Scalars["Int"];
  modifier?: Maybe<Member>;
  name: Scalars["String"];
  renewalDate: Scalars["Date"];
  requiredDocuments: Array<LanguageCourseHasRequiredDocument>;
  requiredInfos: Array<LanguageCourseHasRequiredInfo>;
  semesters: LanguageCourseSemesterPage;
  surroundingInfo: Scalars["String"];
  tags: Array<LanguageCourseTag>;
  updatedAt: Scalars["Date"];
}

export interface LanguageCourseTranslationSemestersArgs {
  input?: InputMaybe<LanguageCourseSemesterPageArgs>;
}

export type LanguageType =
  | "CHINESE"
  | "ENGLISH"
  | "HONGKONG"
  | "JAPANESE"
  | "KOREAN"
  | "TAIWAN"
  | "THAI"
  | "VIETNAMESE";

export interface LatLon {
  latitude: Scalars["Float"];
  longitude: Scalars["Float"];
}

export interface LinePayRequestInfoPaymentUrl {
  __typename?: "LinePayRequestInfoPaymentUrl";
  /**
   * ?????? ?????? ?????? App URL
   * ????????? ?????? ????????? ????????? ???????????? ?????? ??????
   * ????????? ????????? LINE pay ????????? ???????????? ?????? URL
   */
  app: Scalars["String"];
  /**
   * ?????? ?????? ?????? Web URL
   * ?????? ????????? ??? ???????????? ???????????? ?????? ??????
   * LINE Pay ?????? ?????? ???????????? ???????????? ?????? URL
   * ????????? ???????????? ?????? ????????? URL ????????? ??????
   * Desktop?????? ?????? open???, ????????? Width: 700px, Height : 546px
   */
  web: Scalars["String"];
}

export interface LinePayRequestResult {
  __typename?: "LinePayRequestResult";
  info?: Maybe<LinePayRequestResultInfo>;
  /** ???????????? (https://pay.line.me/documents/online_v3_ko.html#request-api) */
  returnCode: Scalars["String"];
  /** ??????????????? */
  returnMessage: Scalars["String"];
}

export interface LinePayRequestResultInfo {
  __typename?: "LinePayRequestResultInfo";
  /** LINE Pay app ?????? Scanner??? ???????????? ?????? ????????? ???????????? ?????? ???????????? ?????? ??? */
  paymentAccessToken: Scalars["String"];
  paymentUrl: LinePayRequestInfoPaymentUrl;
  /** ???????????? */
  transactionId: Scalars["ID"];
}

/** deprecated */
export interface LinePayRequestUrlArgs {
  /** LINE ??? ?????? ???????????? LINE Pay????????? ????????? ???????????? ???????????? URL */
  cancelRedirectUrl: Scalars["String"];
  /** reservation.code */
  code: Scalars["Int"];
  /** ???????????? ??????????????? ?????? ?????? ???????????? ????????? url */
  confirmRedirectUrl: Scalars["String"];
}

export interface LinePayRequestUrlInput {
  /** LINE ??? ?????? ???????????? LINE Pay????????? ????????? ???????????? ???????????? URL */
  cancelRedirectUrl: Scalars["String"];
  /** ???????????? ??????????????? ?????? ?????? ???????????? ????????? url */
  confirmRedirectUrl: Scalars["String"];
  /** order.code, ??????????????? ???????????? */
  domainTransactionId?: InputMaybe<Scalars["String"]>;
  /** order.id, To be deprecated */
  id?: InputMaybe<Scalars["ID"]>;
}

export interface LinkBannerAndBlogArgs {
  bannerCode: Scalars["Int"];
  blogCode: Scalars["Int"];
}

export interface LinkBannerAndProxyShopArgs {
  bannerCode: Scalars["Int"];
  proxyShopId: Scalars["ID"];
}

export interface LinkBannerAndSpotArgs {
  bannerCode: Scalars["Int"];
  spotCode: Scalars["Int"];
}

export interface LinkCategoryToBlogArgs {
  blogCode: Scalars["Int"];
  categoryCode: Scalars["Int"];
}

export interface LinkCategoryToSpotArgs {
  categoryCode: Scalars["Int"];
  spotCode: Scalars["Int"];
}

export interface LinkChildCategoryToParentArgs {
  childCode: Scalars["Int"];
  parentCode: Scalars["Int"];
}

export interface LinkMerchandiseAndPartnerShipInput {
  contractId: Scalars["ID"];
  merchandiseId: Scalars["ID"];
  partnershipId: Scalars["ID"];
}

export interface LinkProxyShopAndBlogInput {
  blogId: Scalars["ID"];
  proxyShopId: Scalars["ID"];
}

export interface LinkedAddressOptionInput {
  firstAddressId: Scalars["ID"];
  secondAddressId?: InputMaybe<Scalars["ID"]>;
}

export interface LinkedIncomingFilter {
  status?: InputMaybe<IncomingMerchandiseStatusType>;
  warehouseId?: InputMaybe<Scalars["ID"]>;
}

export interface LinkedPartnershipInput {
  contractId: Scalars["ID"];
  partnershipId: Scalars["ID"];
}

export interface LocalizedPriceArgs {
  currency: CurrencyType;
}

export interface Member {
  __typename?: "Member";
  cartItems?: Maybe<CartItemPage>;
  code: Scalars["Int"];
  /** @deprecated countryType?????? ?????? */
  country?: Maybe<Country>;
  /** @deprecated countryType?????? ?????? */
  countryCode?: Maybe<Scalars["String"]>;
  countryType?: Maybe<CountryType>;
  coupons?: Maybe<Array<Coupon>>;
  /** YYYY-MM-DD HH:mm:ss */
  createdAt: Scalars["Date"];
  email?: Maybe<Scalars["String"]>;
  fcmTokenInfos: Array<FcmTokenInfo>;
  id: Scalars["ID"];
  /** YYYY-MM-DD HH:mm:ss */
  lastLogin?: Maybe<Scalars["Date"]>;
  level: MemberRoleType;
  likeBlogs?: Maybe<BlogPage>;
  likeSpots?: Maybe<SpotPage>;
  memberLikedProxyShops?: Maybe<MemberLikedProxyShopPage>;
  name?: Maybe<Scalars["String"]>;
  nickname?: Maybe<Scalars["String"]>;
  notifications: NotificationPage;
  orders?: Maybe<OrderPage>;
  partnerships?: Maybe<Array<Partnership>>;
  /** @deprecated Use profileUrl */
  picture?: Maybe<Scalars["String"]>;
  point: Point;
  profileUrl?: Maybe<Scalars["String"]>;
  proxyShopReviews?: Maybe<ProxyShopReviewPage>;
  purchases: ReservationPage;
  requestMerchandiseQuotes: RequestMerchandiseQuotePage;
  reviews: Array<IntegratedReview>;
  shippingAddresses?: Maybe<Array<ShippingAddress>>;
  socialInfos?: Maybe<Array<SocialInfo>>;
  /** YYYY-MM-DD HH:mm:ss */
  updatedAt: Scalars["Date"];
}

export interface MemberCartItemsArgs {
  input: CartItemPageInput;
}

export interface MemberLikeBlogsArgs {
  input: MemberLikeBlogPageArgs;
}

export interface MemberLikeSpotsArgs {
  input: MemberLikeSpotPageArgs;
}

export interface MemberMemberLikedProxyShopsArgs {
  input: MemberLikedProxyShopPageInput;
}

export interface MemberNotificationsArgs {
  input: NotificationPageArgs;
}

export interface MemberOrdersArgs {
  input: OrderPageInput;
}

export interface MemberProxyShopReviewsArgs {
  input: ProxyShopReviewPageInput;
}

export interface MemberPurchasesArgs {
  input: MemberPurchasePageArgs;
}

export interface MemberRequestMerchandiseQuotesArgs {
  input: RequestMerchandiseQuotePageInput;
}

export interface MemberReviewsArgs {
  input: IntegratedReviewArgs;
}

export interface MemberShippingAddressesArgs {
  proxyShopIds?: InputMaybe<Array<Scalars["ID"]>>;
}

export interface MemberFilter {
  code?: InputMaybe<Scalars["ID"]>;
  level?: InputMaybe<MemberRoleType>;
  /** level??? levels ?????? ????????? levels??? ??????????????? */
  levels?: InputMaybe<Array<MemberRoleType>>;
  searchWord?: InputMaybe<Scalars["String"]>;
}

export interface MemberLikeBlogFilter {
  language: LanguageType;
  types: Array<BlogType>;
}

export interface MemberLikeBlogOrder {
  direction?: InputMaybe<OrderByDirectionType>;
  field: BlogLikeOrderType;
}

export interface MemberLikeBlogPageArgs {
  filter: MemberLikeBlogFilter;
  limit: Scalars["Int"];
  order: MemberLikeBlogOrder;
  page: Scalars["Int"];
}

export type MemberLikeProxyShopOrderType = "createdAt";

export interface MemberLikeSpotFilter {
  language: LanguageType;
  types: Array<ReservationType>;
}

export interface MemberLikeSpotOrder {
  direction?: InputMaybe<OrderByDirectionType>;
  field: MemberLikeSpotOrderType;
}

export type MemberLikeSpotOrderType = "CREATED_AT";

export interface MemberLikeSpotPageArgs {
  filter: MemberLikeSpotFilter;
  limit: Scalars["Int"];
  order: MemberLikeSpotOrder;
  page: Scalars["Int"];
}

export interface MemberLikedProxyShop {
  __typename?: "MemberLikedProxyShop";
  /** YYYY-MM-DD HH:mm:ss */
  createdAt: Scalars["Date"];
  id: Scalars["ID"];
  memberId: Scalars["ID"];
  proxyShop: ProxyShop;
  proxyShopId: Scalars["ID"];
  /** YYYY-MM-DD HH:mm:ss */
  updatedAt: Scalars["Date"];
}

export interface MemberLikedProxyShopFilter {
  proxyShopId?: InputMaybe<Scalars["ID"]>;
}

export interface MemberLikedProxyShopOrder {
  direction: OrderByDirectionType;
  field: MemberLikeProxyShopOrderType;
}

export interface MemberLikedProxyShopPage {
  __typename?: "MemberLikedProxyShopPage";
  edges: Array<MemberLikedProxyShop>;
  totalCount: Scalars["Int"];
}

export interface MemberLikedProxyShopPageInput {
  filter?: InputMaybe<MemberLikedProxyShopFilter>;
  limit: Scalars["Int"];
  order?: InputMaybe<MemberLikedProxyShopOrder>;
  page: Scalars["Int"];
}

export interface MemberOrder {
  direction?: InputMaybe<OrderByDirectionType>;
  field: BaseOrderType;
}

export interface MemberPage {
  __typename?: "MemberPage";
  edges: Array<Member>;
  totalCount: Scalars["Int"];
}

export interface MemberPageArgs {
  filter?: InputMaybe<MemberFilter>;
  limit: Scalars["Int"];
  order?: InputMaybe<MemberOrder>;
  page: Scalars["Int"];
}

export interface MemberPurchaseFilter {
  status?: InputMaybe<Array<ReservationStatusType>>;
  types: Array<ReservationType>;
}

export interface MemberPurchasePageArgs {
  filter: MemberPurchaseFilter;
  limit: Scalars["Int"];
  order: ReservationOrder;
  page: Scalars["Int"];
}

export type MemberRoleType =
  | "ADMIN"
  | "BLOCKED"
  | "PARTNER"
  | "SUPER_ADMIN"
  | "USER";

export interface Merchandise {
  __typename?: "Merchandise";
  barcodeUrl?: Maybe<Scalars["String"]>;
  brand: ProxyTag;
  brandId: Scalars["ID"];
  code: Scalars["String"];
  /** YYYY-MM-DD HH:mm:ss */
  createdAt: Scalars["Date"];
  divisionSet: DivisionSet;
  divisionSetId: Scalars["ID"];
  enName: Scalars["String"];
  /** ?????? ?????? ??????(?????? ?????? - ?????? ?????? ??? ??????) */
  forwardableQuantity: Scalars["Int"];
  id: Scalars["ID"];
  imageUrl?: Maybe<Scalars["String"]>;
  incomingMerchandises: Array<IncomingMerchandise>;
  /** ????????? ?????? */
  incomingQuantity: Scalars["Int"];
  isActive: Scalars["Boolean"];
  isDeleted: Scalars["Boolean"];
  koName: Scalars["String"];
  optionPairs?: Maybe<Array<OptionPair>>;
  outgoingMerchandises: Array<OutgoingMerchandise>;
  partnershipHasMerchandises?: Maybe<Array<PartnershipHasMerchandise>>;
  /** ?????? ?????? ??? ?????? */
  preparedQuantity: Scalars["Int"];
  purchaseBasePrice: Scalars["Int"];
  purchaseUrl?: Maybe<Scalars["String"]>;
  salesBasePrice: Scalars["Int"];
  /** ?????? ?????? */
  stockQuantity: Scalars["Int"];
  totalUnitPriceOfMerchandiseStock: Scalars["Int"];
  type: MerchandiseType;
  /** ????????? ?????? */
  unprocessedQuantity: Scalars["Int"];
  /** YYYY-MM-DD HH:mm:ss */
  updatedAt: Scalars["Date"];
  /** gram(g) */
  weight: Scalars["Int"];
}

export interface MerchandiseForwardableQuantityArgs {
  warehouseId?: InputMaybe<Scalars["ID"]>;
}

export interface MerchandiseIncomingQuantityArgs {
  warehouseId?: InputMaybe<Scalars["ID"]>;
}

export interface MerchandisePreparedQuantityArgs {
  warehouseId?: InputMaybe<Scalars["ID"]>;
}

export interface MerchandiseStockQuantityArgs {
  warehouseId?: InputMaybe<Scalars["ID"]>;
}

export interface MerchandiseTotalUnitPriceOfMerchandiseStockArgs {
  warehouseId?: InputMaybe<Scalars["ID"]>;
}

export interface MerchandiseUnprocessedQuantityArgs {
  warehouseId?: InputMaybe<Scalars["ID"]>;
}

export interface MerchandiseCreateInput {
  brandId: Scalars["ID"];
  divisionSetId: Scalars["ID"];
  enName: Scalars["String"];
  imageUrl: Scalars["URL"];
  koName: Scalars["String"];
  linkedPartnershipInputs?: InputMaybe<Array<LinkedPartnershipInput>>;
  optionPairs?: InputMaybe<Array<OptionPairCreateWithoutMerchandiseInput>>;
  purchaseBasePrice: Scalars["Int"];
  purchaseUrl?: InputMaybe<Scalars["String"]>;
  salesBasePrice: Scalars["Int"];
  type: MerchandiseType;
  weight: Scalars["Int"];
}

export interface MerchandiseFilter {
  contractId?: InputMaybe<Scalars["ID"]>;
  createdAt?: InputMaybe<PeriodInput>;
  hasUnprocessedQuantity?: InputMaybe<Scalars["Boolean"]>;
  isActive?: InputMaybe<Scalars["Boolean"]>;
  partnershipId?: InputMaybe<Scalars["ID"]>;
  search?: InputMaybe<Scalars["String"]>;
  type?: InputMaybe<MerchandiseType>;
  warehouseId?: InputMaybe<Scalars["ID"]>;
}

export interface MerchandiseInAndOutLink {
  __typename?: "MerchandiseInAndOutLink";
  /** YYYY-MM-DD HH:mm:ss */
  createdAt: Scalars["Date"];
  id: Scalars["ID"];
  incomingMerchandise: IncomingMerchandise;
  incomingMerchandiseId: Scalars["ID"];
  /** @deprecated ?????? ??? ??????, incoming, outgoing?????? ?????? ?????? */
  merchandise: Merchandise;
  /** @deprecated ?????? ??? ??????, incoming, outgoing?????? ?????? ?????? */
  merchandiseId: Scalars["ID"];
  outgoingMerchandise: OutgoingMerchandise;
  outgoingMerchandiseId: Scalars["ID"];
  quantity: Scalars["Int"];
  type: MerchandiseInAndOutLinkType;
  /** YYYY-MM-DD HH:mm:ss */
  updatedAt: Scalars["Date"];
}

export interface MerchandiseInAndOutLinkFilter {
  createdAt?: InputMaybe<PeriodInput>;
  incomingMerchandise?: InputMaybe<MerchandiseInAndOutLinkIncomingFilter>;
  outgoingMerchandise?: InputMaybe<MerchandiseInAndOutLinkOutgoingFilter>;
  search?: InputMaybe<Scalars["String"]>;
  type?: InputMaybe<MerchandiseInAndOutLinkType>;
}

export interface MerchandiseInAndOutLinkIncomingFilter {
  receivedAt?: InputMaybe<PeriodInput>;
  status?: InputMaybe<IncomingMerchandiseStatusType>;
  type?: InputMaybe<IncomingMerchandiseType>;
  warehouseId?: InputMaybe<Scalars["ID"]>;
}

export interface MerchandiseInAndOutLinkOrder {
  direction: OrderByDirectionType;
  field: MerchandiseInAndOutLinkOrderType;
}

export type MerchandiseInAndOutLinkOrderType = "createdAt";

export interface MerchandiseInAndOutLinkOutgoingFilter {
  status?: InputMaybe<OutgoingMerchandiseStatusType>;
  type?: InputMaybe<OutgoingMerchandiseType>;
  warehouseId?: InputMaybe<Scalars["ID"]>;
}

export interface MerchandiseInAndOutLinkPage {
  __typename?: "MerchandiseInAndOutLinkPage";
  edges: Array<MerchandiseInAndOutLink>;
  totalCount: Scalars["Int"];
}

export interface MerchandiseInAndOutLinkPageInput {
  filter?: InputMaybe<MerchandiseInAndOutLinkFilter>;
  limit: Scalars["Int"];
  order?: InputMaybe<MerchandiseInAndOutLinkOrder>;
  page: Scalars["Int"];
}

/** FIFO: ?????? ?????? ????????? ??????, MOVEMENT: ?????? ??? ?????? ???????????? ?????? */
export type MerchandiseInAndOutLinkType = "FIFO" | "MOVEMENT";

export interface MerchandiseOrder {
  direction: OrderByDirectionType;
  field: MerchandiseOrderType;
}

export type MerchandiseOrderType = "createdAt";

export interface MerchandisePage {
  __typename?: "MerchandisePage";
  edges: Array<Merchandise>;
  totalCount: Scalars["Int"];
}

export interface MerchandisePageInput {
  filter?: InputMaybe<MerchandiseFilter>;
  limit: Scalars["Int"];
  order?: InputMaybe<MerchandiseOrder>;
  page: Scalars["Int"];
}

export type MerchandiseType = "COMMON" | "GIFT" | "MD";

export interface MerchandiseUpdateInput {
  id: Scalars["ID"];
  imageUrl?: InputMaybe<Scalars["URL"]>;
  purchaseBasePrice?: InputMaybe<Scalars["Int"]>;
  purchaseUrl?: InputMaybe<Scalars["String"]>;
  salesBasePrice?: InputMaybe<Scalars["Int"]>;
}

export interface MiddleCategoryListArg {
  /** default ?????? middle category */
  brandId?: InputMaybe<Scalars["ID"]>;
  /** default ???????????? */
  createdAt?: InputMaybe<PeriodInput>;
  /** ?????? ???????????? ???????????? ????????? ???????????? ??????, null???????????? ?????? ????????? ?????? ???????????? ???????????? */
  hasEvent?: InputMaybe<Scalars["Boolean"]>;
  language: LanguageType;
  /** default ?????? ????????? */
  limit?: InputMaybe<Scalars["Int"]>;
}

export interface MostViewedProxyShopsArgs {
  currency: CurrencyType;
  language: LanguageType;
  period: PeriodInput;
  size: Scalars["Int"];
}

export interface MoveMerchandiseToOtherWarehouseInput {
  merchandiseId: Scalars["ID"];
  quantity: Scalars["Int"];
  sourceWarehouseId: Scalars["ID"];
  targetWarehouseId: Scalars["ID"];
}

export interface MultiSearchArgs {
  currency: CurrencyType;
  /** default: 200, max: 1000 */
  excerptLength?: InputMaybe<Scalars["Int"]>;
  keyword: Scalars["String"];
  language: LanguageType;
  /** default: 6, max: 20 */
  limit?: InputMaybe<Scalars["Int"]>;
}

export interface MultiSearchResult {
  __typename?: "MultiSearchResult";
  searchedBlogs: SearchedBlogPage;
  searchedCoupons: SearchedSpotPage;
  searchedNews: SearchedBlogPage;
  searchedProxyShops: SearchedProxyShopPage;
  searchedSpots: SearchedSpotPage;
}

export interface MultiSearchResultFederation {
  __typename?: "MultiSearchResultFederation";
  searchedBlogs: BlogPage;
  searchedCoupons: SpotPage;
  searchedNews: BlogPage;
  searchedProxyShops: ProxyShopPage;
  searchedSpots: SpotPage;
}

export interface Mutation {
  __typename?: "Mutation";
  addBlogToAdvertisement: Advertisement;
  addBlogToSpot: BlogHasSpot;
  addCategoryToProxyShop: ProxyShopHasCategory;
  addCouponToMember: Member;
  /** ????????? ????????? ???????????? ?????? */
  addExcludedShippingPolicyToProxyShop: ProxyShop;
  addGiftToOrderShipping: OrderShipping;
  /** @deprecated ????????? */
  addHashtagToLanguageCourseTranslation: LanguageCourseTranslation;
  addHashtagToProxyShop: Hashtag;
  addImageToProxyShop: ProxyShopImage;
  addImageToProxyShopReview: ProxyShopReviewImage;
  addImageToSpotReview: SpotReviewImage;
  addMerchandiseToProxyShop: ProxyShopHasMerchandise;
  addPaymentInformationToOrder: Order;
  addPercentRefundPolicy: ReservationPolicy;
  addProxyShopToAdvertisement: AdvertisementTrans;
  addPushMessageTypeToIgnoredList: FcmTokenInfo;
  addRemarkToReservationPolicy: ReservationPolicy;
  addRequiredInfoToReservationPolicy: ReservationPolicy;
  addShippingInfoToOrderShipping: OrderShipping;
  addSpotToAdvertisement: Advertisement;
  addSpotToContract: Contract;
  /** @deprecated linkSpotToCoupon ?????? ?????? */
  addSpotToCoupon: Coupon;
  addSpotToVoucherTemplate: SpotHasVoucherTemplate;
  addTagToAdvertisement: AdvertisementHasTag;
  addTagToLanguageCourseTranslation: LanguageCourseTranslation;
  addTripHashtagToBlog: BlogTrans;
  addTripHashtagToSpot: SpotTrans;
  addTypeToBlog: Blog;
  addVoucherToReservation: Reservation;
  applyPointToLanguageCourseRegistrationPostPayment: LanguageCourseRegistration;
  applyPointToLanguageCourseRegistrationPrePayment: LanguageCourseRegistration;
  applyPointToOrder: Order;
  /** ??????????????? ????????? ???????????? ?????? */
  applyPointToReservation: Reservation;
  bulkCreateCartItem: Array<CartItem>;
  bulkCreateIncomingMerchandise: Array<IncomingMerchandise>;
  bulkCreateVoucher: Array<Voucher>;
  bulkMoveMerchandiseToOtherWarehouse: Array<MerchandiseInAndOutLink>;
  bulkReceiveMovedMerchandises: Array<OutgoingMerchandise>;
  /** group ????????? ???????????? ????????? ???????????? ?????? ?????? */
  bulkSetRequiredInfoToLanguageCourseTranslation: LanguageCourseTranslation;
  bulkUpdateShippingInfoToOrderShipping: Array<OrderShipping>;
  bulkUpdateSpotItemTrans: Array<SpotItemTrans>;
  bulkUpdateSpotItems: Array<SpotItem>;
  cancelIncomingMerchandise: IncomingMerchandise;
  cancelOrderShipping: OrderShipping;
  cancelOrderShippingItem: OrderShipping;
  cancelPaymentReadyOrderShipping: OrderShipping;
  cancelRequestMerchandiseQuote: RequestMerchandiseQuote;
  cancelReservation: Reservation;
  cancelReservationForUser: Reservation;
  changeAllNotificationsToReadStatus: Scalars["Boolean"];
  changeCartItemQuantity: CartItem;
  changeMemberLevel: Member;
  changeMemberThumbnail: Member;
  changeNotificationToReadStatus: Notification;
  changePartnerPassword: Member;
  changePassword: Scalars["Boolean"];
  changeProxyShopHasMerchandisePriority: Array<ProxyShopHasMerchandise>;
  changeProxyShopImagePriority: Array<ProxyShopImage>;
  changeProxyShopReviewImagePriority: Array<ProxyShopReviewImage>;
  changeProxyTagPriority: Array<ProxyTag>;
  changeReservationDate: Reservation;
  changeWarehouseFromOrderShipping: OrderShipping;
  closeEvent: SpotEvent;
  closeEventTest: Array<ProxyShopEvent>;
  completeOrder: Order;
  completeOrderShipping: OrderShipping;
  completePreparingMerchandise: OrderShipping;
  /** @deprecated Payment webhook?????? ???????????? ???????????? ?????? */
  confirmLinePayForProxy: Order;
  /** @deprecated ??????????????? rest api??? ?????????????????? */
  confirmLinePayForTrip: Reservation;
  confirmReservation: Reservation;
  confirmUserBlog: Blog;
  copyLanguageCourseTranslation: LanguageCourse;
  createAddressOption: AddressOption;
  createAdvertisement: Advertisement;
  createBanner: Banner;
  createBlog: Blog;
  createBlogDraftForUser: Blog;
  createBlogReview: BlogReview;
  createCartItem: CartItem;
  createCategory: Category;
  createContractToPartnership: Contract;
  createDiscountIndividualProxyShopEvent: DiscountProxyShopEvent;
  createDiscountIndividualSpotEvent: IndividualSpotEvent;
  createDiscountProxyShopEvent: DiscountProxyShopEvent;
  createDiscountSpotEvent: SpotEvent;
  createDivision: Division;
  createDivisionSet: DivisionSet;
  createExchangeWithTrans: Exchange;
  createFaq: Faq;
  createFileToContract: ContractFile;
  createFreeShippingIndividualProxyShopEvent: FreeShippingProxyShopEvent;
  createFreeShippingProxyShopEvent: FreeShippingProxyShopEvent;
  createGetFreeIndividualProxyShopEvent: GetFreeProxyShopEvent;
  createGetFreeIndividualSpotEvent: IndividualSpotEvent;
  createGetFreeProxyShopEvent: GetFreeProxyShopEvent;
  createGetFreeSpotEvent: SpotEvent;
  createGiftIndividualProxyShopEvent: GiftProxyShopEvent;
  createGiftProxyShopEvent: GiftProxyShopEvent;
  createImageToBlog: Image;
  createImageToSpot: Image;
  createImageToSpotItem: SpotItemImage;
  createIncomingMerchandise: IncomingMerchandise;
  createIndividualToShippingPolicy: IndividualShippingPolicy;
  createItemToSpot: SpotItem;
  createLanguageCourse: LanguageCourse;
  createLanguageCourseDormitory: LanguageCourse;
  createLanguageCourseRegistration: LanguageCourseRegistration;
  createLanguageCourseRequiredDocument: LanguageCourseRequiredDocument;
  createLanguageCourseRequiredInfo: LanguageCourseRequiredInfo;
  createLanguageCourseRequiredInfoGroup: LanguageCourseRequiredInfoGroup;
  createLanguageCourseSemester: LanguageCourseTranslation;
  createLanguageCourseTag: LanguageCourseTag;
  createMerchandise: Merchandise;
  createNonSaleOutgoingMerchandise: OutgoingMerchandise;
  createOnlineCoupon: Coupon;
  createOnsiteCoupon: Coupon;
  createOrder: Order;
  createOrderForNonUser: Order;
  createPartner: Member;
  createPartnership: Partnership;
  createProxyShop: ProxyShop;
  createProxyShopReview: ProxyShopReview;
  createProxyTagCategoryRelation: ProxyTag;
  createProxyTagOptionRelation: ProxyTag;
  /** This mutation, You should input all Language in ProxyTagCreateInput */
  createProxyTagWithTranslations: ProxyTag;
  createRequestMerchandiseQuote: RequestMerchandiseQuote;
  createRequiredInfoWithTrans: RequiredInfo;
  createReservation: Reservation;
  createReservationForNonUser: Reservation;
  /** ????????? ????????? ?????? ?????? ?????? */
  createReservationReview: SpotReview;
  createShippingAddress: ShippingAddress;
  createShippingAddressAboutShippingSite: ShippingAddress;
  createShippingPolicy: ShippingPolicy;
  createShippingSite: ShippingSite;
  createSpecialReservableTimeToReservationPolicy: SpecialReservableTime;
  createSpot: Spot;
  createSpotReview: SpotReview;
  createTip: Tip;
  createTransToAdvertisement: AdvertisementTrans;
  createVoucher: Voucher;
  createVoucherTemplate: VoucherTemplate;
  createWarehouse: Warehouse;
  declineUserBlog: Blog;
  deleteAddressOption: Scalars["ID"];
  deleteAdvertisement: Scalars["Boolean"];
  deleteAdvertisementTrans: Scalars["Boolean"];
  deleteBanner: Scalars["Boolean"];
  deleteBlog: Scalars["Boolean"];
  deleteBlogReview: Scalars["Boolean"];
  deleteBlogTrans: Scalars["Boolean"];
  deleteCartItem: Scalars["ID"];
  deleteCategory: Scalars["Boolean"];
  deleteContractFromPartnership: Scalars["Boolean"];
  deleteCoupon: Scalars["Boolean"];
  deleteDivision: Scalars["ID"];
  deleteDivisionSet: Scalars["ID"];
  deleteDraftBlogForUser: Scalars["Boolean"];
  deleteExchange: Scalars["Boolean"];
  deleteFaq: Scalars["Boolean"];
  deleteFileFromContract: Scalars["Boolean"];
  deleteImageFromBlog: Scalars["Boolean"];
  deleteImageFromCoupon: Coupon;
  deleteImageFromRequiredInfo: RequiredInfo;
  deleteImageFromSpot: Scalars["Boolean"];
  deleteImageFromSpotItem: Scalars["Boolean"];
  deleteIndividualFromShippingPolicy: Scalars["ID"];
  deleteIndividualProxyShopEvent: ProxyShopEvent;
  deleteIndividualSpotEvent: SpotEvent;
  deleteItemFromSpot: Scalars["Boolean"];
  deleteLanguageCourse: Scalars["Boolean"];
  deleteLanguageCourseDormitory: Scalars["Boolean"];
  deleteLanguageCourseRequiredDocument: Scalars["Boolean"];
  deleteLanguageCourseRequiredInfo: Scalars["Boolean"];
  deleteLanguageCourseRequiredInfoGroup: Scalars["Boolean"];
  deleteLanguageCourseSemester: LanguageCourseTranslation;
  deleteLanguageCourseTag: Scalars["Boolean"];
  deleteLanguageCourseTranslation: Scalars["Boolean"];
  deleteMember: Scalars["Boolean"];
  deleteMerchandise: Scalars["ID"];
  deleteNotification: Scalars["Boolean"];
  deleteOptionPair: Scalars["ID"];
  deletePartnership: Scalars["Boolean"];
  deleteProxyShop: Scalars["ID"];
  deleteProxyShopEvent: Scalars["Boolean"];
  deleteProxyShopReview: Scalars["ID"];
  deleteProxyTag: Scalars["ID"];
  deleteProxyTagRelation: Scalars["Boolean"];
  deletePsdFromCoupon: Coupon;
  deleteRequiredInfo: Scalars["Boolean"];
  deleteSearchHistory: Array<Scalars["String"]>;
  deleteShippingAddress: Scalars["Boolean"];
  deleteShippingPolicy: Scalars["ID"];
  deleteShippingSite: Scalars["ID"];
  deleteSpecialReservableTimeFromReservationPolicy: Scalars["Boolean"];
  deleteSpot: Scalars["Boolean"];
  deleteSpotEvent: Scalars["Boolean"];
  deleteSpotReview: Scalars["Boolean"];
  deleteTip: Scalars["Boolean"];
  deleteVoucher: VoucherTemplate;
  deleteVoucherTemplate: Scalars["Boolean"];
  deleteWarehouse: Scalars["ID"];
  expireMemberFromFcmTokenInfo: FcmTokenInfo;
  forceCloseProxyShopEvent: ProxyShopEvent;
  /** ???????????? ?????? ?????? ???????????? ?????? */
  givePointCompensation: Point;
  integrateSocialAccount: Member;
  /** ?????? ????????? ????????? ?????? */
  issueVouchersToReservation: Array<Voucher>;
  linkBannerAndBlog: Banner;
  linkBannerAndProxyShop: Banner;
  linkBannerAndSpot: Banner;
  linkCategoryToBlog: Blog;
  linkCategoryToSpot: Spot;
  linkChildCategoryToParent: Category;
  linkMerchandiseAndPartnerShip: PartnershipHasMerchandise;
  linkProxyShopAndBlog: BlogHasProxyShop;
  linkSpotToCoupon: SpotHasCoupon;
  /** @deprecated use signIn */
  login: SignInResult;
  /** ????????? ?????? ?????? description ?????? ?????? */
  manualUseVoucher: Voucher;
  moveMerchandiseToOtherWarehouse: Array<MerchandiseInAndOutLink>;
  overwriteDesktopImageToAdvertisementTrans: AdvertisementTrans;
  overwriteImageToAdvertisementTrans: AdvertisementTrans;
  overwriteMobileImageToAdvertisementTrans: AdvertisementTrans;
  overwriteTabletImageToAdvertisementTrans: AdvertisementTrans;
  purchaseCompleteOrderShipping: OrderShipping;
  receiveIncomingMerchandise: IncomingMerchandise;
  receiveMovedMerchandises: OutgoingMerchandise;
  refundOrCancelForNonUser: Reservation;
  refundReservation: Reservation;
  registerFcmTokenInfo: FcmTokenInfo;
  rejectOrderShippingCancelRequest: OrderShipping;
  removeBlogFromAdvertisement: Advertisement;
  removeBlogFromSpot: Scalars["Boolean"];
  removeCategoryFromProxyShop: Scalars["Boolean"];
  removeCouponFromMember: Scalars["Boolean"];
  removeCurrencyExchangePriceFromExchange: Exchange;
  /** ????????? ????????? ???????????? ?????? */
  removeExcludedShippingPolicyFromProxyShop: Scalars["Boolean"];
  /** @deprecated ????????? */
  removeHashtagFromLanguageCourseTranslation: LanguageCourseTranslation;
  removeHashtagFromProxyShop: Scalars["Boolean"];
  removeImageFromProxyShop: Array<ProxyShopImage>;
  removeImageFromProxyShopReview: Array<ProxyShopReviewImage>;
  removeImageFromSpotReview: Array<SpotReviewImage>;
  removeLanguageCourseRegistrationRequiredDocumentFile: LanguageCourseRegistrationRequiredDocument;
  removeMerchandiseFromProxyShop: Array<ProxyShopHasMerchandise>;
  removePercentRefundPolicy: ReservationPolicy;
  removeProxyShopFromAdvertisement: AdvertisementTrans;
  removePushMessageTypeToIgnoredList: FcmTokenInfo;
  removeRemarkFromReservationPolicy: Scalars["Boolean"];
  removeRequiredInfoFromReservationPolicy: ReservationPolicy;
  removeSpotFromAdvertisement: Advertisement;
  removeSpotFromContract: Scalars["Boolean"];
  /** @deprecated Move to unlinkSpotFromCoupon */
  removeSpotFromCoupon: Scalars["Boolean"];
  removeSpotFromVoucherTemplate: Scalars["Boolean"];
  removeTagFromAdvertisement: Scalars["Boolean"];
  removeTagToLanguageCourseTranslation: LanguageCourseTranslation;
  removeTripHashtagFromBlog: Scalars["Boolean"];
  removeTripHashtagFromSpot: Scalars["Boolean"];
  removeTypeFromBlog: Blog;
  requestConfirmBlogForUser: Blog;
  requestOrderShippingCancellation: OrderShipping;
  requestOrderShippingCancellationForNonUser: OrderShipping;
  requestResetPassword: Scalars["Boolean"];
  resetOrderShipping: Order;
  resetPassword: Scalars["Boolean"];
  sendRequestMerchandiseQuote: RequestMerchandiseQuote;
  sendReservationStatusMail: Scalars["Boolean"];
  sendSupportMail: Scalars["Boolean"];
  sendTestNotification: Scalars["Boolean"];
  setAsUsedReservation: Reservation;
  setBlogTransToTip: Tip;
  setBrandImage: ProxyTag;
  setCityCategoryToLanguageCourse: LanguageCourse;
  setDetailLocationCategoryToLanguageCourse: LanguageCourse;
  setFaqActiveStatus: Faq;
  setGroupToLanguageCourseRequiredInfo: LanguageCourseRequiredInfo;
  setImageToCoupon: Coupon;
  setLanguageCourseIsFemaleCollegeStatus: LanguageCourse;
  setLanguageCourseLikeStatus: LanguageCourse;
  setLanguageCourseRequiredInfoRequiredStatus: LanguageCourseRequiredInfo;
  setLanguageCourseTranslationPublishStatus: LanguageCourseTranslation;
  setMainImageToBlogTrans: BlogTrans;
  setMainImageToLanguageCourse: LanguageCourse;
  setMainLinkedMerchandise: Array<ProxyShopHasMerchandise>;
  setMainProxyShopImage: Array<ProxyShopImage>;
  setMainSpotImage: Array<Image>;
  setMainSpotItem: Array<SpotItem>;
  setMainSpotItemImage: Array<SpotItemImage>;
  setManagerToCoupon: Coupon;
  setManagerToLanguageCourseTranslation: LanguageCourseTranslation;
  setManagerToPartnership: Partnership;
  setManagerToTip: Tip;
  setOpeningHours: Spot;
  setPartnerToPartnership: Partnership;
  setPartnershipToCoupon: Coupon;
  setPartnershipToLanguageCourse: LanguageCourse;
  setPrecautionToReservation: Reservation;
  setProxyShopRocketStatus: ProxyShop;
  setPsdToCoupon: Coupon;
  setRequiredDocumentToLanguageCourseTranslation: LanguageCourseTranslation;
  setRequiredInfoToLanguageCourseTranslation: LanguageCourseTranslation;
  setReservableTimes: ReservationPolicy;
  setTipImage: Tip;
  setVoucherTemplateManager: VoucherTemplate;
  setWarehouseActiveStatus: Warehouse;
  signIn: SignInResult;
  signInWithSocial: SignInResult;
  signUp: SignInResult;
  skipPaymentForOrder: Order;
  /** ????????? ?????? ????????? ???????????? ??? ????????? 0?????? ?????? ?????? ??? ????????? ?????? */
  skipPaymentForReservation: Reservation;
  splitOrderShipping: Order;
  startEventTest: Array<ProxyShopEvent>;
  toggleAdvertisementTransPublishStatus: AdvertisementTrans;
  /** @deprecated toggleAdvertisementTransPublishStatus?????? ?????? */
  toggleAdvertisementTransStatus: AdvertisementTrans;
  toggleBannerPublishStatus: Banner;
  toggleBlogTransStatus: BlogTrans;
  toggleContractStatus: Contract;
  toggleCouponActiveStatus: Coupon;
  /** @deprecated toggleExchangePublishStatus??? ?????? */
  toggleExchangeStatus: Exchange;
  toggleLikeBlog: Scalars["Boolean"];
  toggleLikeProxyShop: Scalars["Boolean"];
  toggleLikeSpot: Scalars["Boolean"];
  toggleMerchandiseActiveStatus: Merchandise;
  /** @deprecated togglePartnershipActiveStatus??? ?????? */
  togglePartnershipStatus: Partnership;
  toggleProxyShopDisplayDiscountStatus: ProxyShop;
  toggleProxyShopHasMerchandiseActiveStatus: ProxyShopHasMerchandise;
  toggleProxyShopPublishStatus: ProxyShop;
  toggleProxyShopRecommendStatus: ProxyShop;
  toggleProxyTagRecommendStatus: ProxyTag;
  /** @deprecated toggleRequiredInfoFixStatus??? ?????? */
  toggleRequiredInfoStatus: RequiredInfo;
  toggleReservationPolicyStatus: ReservationPolicy;
  toggleShippingPolicyActiveStatus: ShippingPolicy;
  toggleSpotItemStatus: SpotItem;
  toggleSpotStatus: Spot;
  toggleSpotTransStatus: SpotTrans;
  toggleTipActiveStatus: Tip;
  toggleTripHashtagRecommendStatus: TripHashtag;
  unlinkBannerAndBlog: Scalars["Boolean"];
  unlinkBannerAndProxyShop: Scalars["Boolean"];
  unlinkBannerAndSpot: Scalars["Boolean"];
  unlinkCategoryFromBlog: Scalars["Boolean"];
  unlinkCategoryFromSpot: Scalars["Boolean"];
  unlinkChildCategoryFromParent: Category;
  unlinkMerchandiseAndPartnerShip: Scalars["Boolean"];
  unlinkProxyShopAndBlog: Scalars["Boolean"];
  unlinkSpotFromCoupon: Scalars["Boolean"];
  unsetBrandImage: ProxyTag;
  unsetManagerFromPartnership: Partnership;
  unsetPartnerFromPartnership: Partnership;
  updateAddressOption: AddressOption;
  updateAdvertisement: Advertisement;
  updateAdvertisementTrans: AdvertisementTrans;
  updateBanner: Banner;
  updateBlogForUser: Blog;
  updateBlogReview: BlogReview;
  updateBlogTransRenewalDate: BlogTrans;
  updateCategory: Category;
  updateCategoryPriority: Array<Category>;
  updateContract: Contract;
  updateCurrencyExchangePrices: Exchange;
  updateDiscountIndividualProxyShopEvent: ProxyShopEvent;
  updateDiscountIndividualSpotEvent: IndividualSpotEvent;
  updateDiscountProxyShopEvent: DiscountProxyShopEvent;
  updateDiscountSpotEvent: SpotEvent;
  updateDivision: Division;
  updateDivisionSet: DivisionSet;
  updateExchangeWithTrans: Exchange;
  updateExpectedArrivalToOrderShipping: OrderShipping;
  updateFaq: Faq;
  updateFaqPriority: Array<Faq>;
  updateFreeShippingPolicy: FreeShippingPolicy;
  updateFreeShippingProxyShopEvent: FreeShippingProxyShopEvent;
  updateGetFreeProxyShopEvent: GetFreeProxyShopEvent;
  updateGetFreeSpotEvent: SpotEvent;
  updateGiftIndividualProxyShopEvent: ProxyShopEvent;
  updateGiftProxyShopEvent: GiftProxyShopEvent;
  updateImageToProxyShop: ProxyShopImage;
  updateIncomingMerchandise: IncomingMerchandise;
  updateIndividualShippingPolicy: IndividualShippingPolicy;
  updateLanguageCourse: LanguageCourse;
  /** @deprecated upsertLanguageCourseDormitoryTranslation ?????? ?????? */
  updateLanguageCourseDormitoryTranslation: LanguageCourseDormitoryTranslation;
  updateLanguageCourseHasRequiredDocument: LanguageCourseTranslation;
  updateLanguageCoursePriceInfo: LanguageCourseTranslation;
  updateLanguageCourseRequiredDocument: LanguageCourseRequiredDocument;
  updateLanguageCourseRequiredInfo: LanguageCourseRequiredInfo;
  updateLanguageCourseRequiredInfoGroup: LanguageCourseRequiredInfoGroup;
  updateLanguageCourseRequiredInfoGroupPriority: Array<LanguageCourseRequiredInfoGroup>;
  updateLanguageCourseRequiredInfoPriority: Array<LanguageCourseRequiredInfo>;
  updateLanguageCourseTag: LanguageCourseTag;
  updateLanguageCourseTranslation: LanguageCourseTranslation;
  updateLanguageCourseTranslationName: LanguageCourseTranslation;
  updateLanguageCourseTranslationRenewalDate: LanguageCourseTranslation;
  updateLinkedMerchandise: ProxyShopHasMerchandise;
  updateMerchandise: Merchandise;
  updateOnlineCoupon: Coupon;
  updateOnsiteCoupon: Coupon;
  updateOrder: Order;
  updateOrderBusinessUserInfoForInvoice: Order;
  updateOrderRecipientInfo: Order;
  updateOrderRecipientInfoForNonUser: Order;
  updateOrderUserInfoForInvoice: Order;
  updatePartner: Member;
  updatePartnership: Partnership;
  updatePercentRefundPolicy: ReservationPolicy;
  updateProxyShop: ProxyShop;
  updateProxyShopRenewalDate: ProxyShop;
  updateProxyShopReview: ProxyShopReview;
  updateProxyTag: ProxyTag;
  updateRequestMerchandiseQuote: RequestMerchandiseQuote;
  updateRequiredInfoWithTrans: RequiredInfo;
  updateShippingPolicy: ShippingPolicy;
  updateShippingSite: ShippingSite;
  updateSpecialReservableTime: SpecialReservableTime;
  updateSpot: Spot;
  updateSpotImagePriority: Array<Image>;
  updateSpotItemImagePriority: Array<SpotItemImage>;
  updateSpotItemPriority: Array<SpotItem>;
  updateSpotReview: SpotReview;
  updateSpotTransRenewalDate: SpotTrans;
  updateTip: Tip;
  updateTipPriority: Array<Tip>;
  updateUser: Member;
  updateVoucher: Voucher;
  updateVoucherTemplate: VoucherTemplate;
  updateWarehouse: Warehouse;
  uploadDesktopImageToBanner: Banner;
  uploadImageToRequiredInfo: RequiredInfo;
  uploadLanguageCourseRegistrationRequiredDocumentFile: LanguageCourseRegistrationRequiredDocument;
  uploadMobileImageToBanner: Banner;
  uploadTabletImageToBanner: Banner;
  uploadTemplateFileToLanguageCourseHasRequiredDocument: LanguageCourseHasRequiredDocument;
  upsertBlogTrans: BlogTrans;
  upsertCurrencyExchangePriceToExchange: Exchange;
  upsertLanguageCourseDormitoryTranslation: LanguageCourseDormitoryTranslation;
  upsertReservationPolicy: ReservationPolicy;
  upsertSpotTrans: SpotTrans;
}

export interface MutationAddBlogToAdvertisementArgs {
  input: AddBlogToAdvertisementArgs;
}

export interface MutationAddBlogToSpotArgs {
  input: AddBlogToSpotArgs;
}

export interface MutationAddCategoryToProxyShopArgs {
  input: ProxyShopCategoryCreateInput;
}

export interface MutationAddCouponToMemberArgs {
  couponCode: Scalars["Float"];
}

export interface MutationAddExcludedShippingPolicyToProxyShopArgs {
  input: ProxyShopHasExcludedShippingPolicyCreateInput;
}

export interface MutationAddGiftToOrderShippingArgs {
  input: AddGiftToOrderShippingInput;
}

export interface MutationAddHashtagToLanguageCourseTranslationArgs {
  input: AddHashtagToLanguageCourseTranslationArgs;
}

export interface MutationAddHashtagToProxyShopArgs {
  input: ProxyShopHasHashtagCreateInput;
}

export interface MutationAddImageToProxyShopArgs {
  input: ProxyShopImageCreateInput;
}

export interface MutationAddImageToProxyShopReviewArgs {
  input: ProxyShopReviewImageAddInput;
}

export interface MutationAddImageToSpotReviewArgs {
  input: SpotReviewImageAddArgs;
}

export interface MutationAddMerchandiseToProxyShopArgs {
  input: ProxyShopHasMerchandiseCreateInput;
}

export interface MutationAddPaymentInformationToOrderArgs {
  input: AddPaymentInput;
}

export interface MutationAddPercentRefundPolicyArgs {
  input: AddPercentRefundPolicyArgs;
}

export interface MutationAddProxyShopToAdvertisementArgs {
  input: AddProxyShopToAdvertisementArgs;
}

export interface MutationAddPushMessageTypeToIgnoredListArgs {
  input: AddIgnoredPushMessageTypeArgs;
}

export interface MutationAddRemarkToReservationPolicyArgs {
  input: AddRemarkToReservationArgs;
}

export interface MutationAddRequiredInfoToReservationPolicyArgs {
  input: AddRequiredInfoToReservationPolicyArgs;
}

export interface MutationAddShippingInfoToOrderShippingArgs {
  input: AddShippingInfoToOrderShippingInput;
}

export interface MutationAddSpotToAdvertisementArgs {
  input: AddSpotToAdvertisementArgs;
}

export interface MutationAddSpotToContractArgs {
  input: AddSpotToContractArgs;
}

export interface MutationAddSpotToCouponArgs {
  input: AddSpotToCouponArgs;
}

export interface MutationAddSpotToVoucherTemplateArgs {
  input: AddSpotToVoucherTemplateArgs;
}

export interface MutationAddTagToAdvertisementArgs {
  input: AddTagToAdvertisementArgs;
}

export interface MutationAddTagToLanguageCourseTranslationArgs {
  input: AddTagToLanguageCourseTranslationInput;
}

export interface MutationAddTripHashtagToBlogArgs {
  input: AddTripHashtagToBlogTransArgs;
}

export interface MutationAddTripHashtagToSpotArgs {
  input: AddTripHashtagToSpotTransArgs;
}

export interface MutationAddTypeToBlogArgs {
  input: AddTypeToBlogArgs;
}

export interface MutationAddVoucherToReservationArgs {
  input: AddVoucherToReservationArgs;
}

export interface MutationApplyPointToLanguageCourseRegistrationPostPaymentArgs {
  input: ApplyPointToLanguageCourseRegistrationPaymentInput;
}

export interface MutationApplyPointToLanguageCourseRegistrationPrePaymentArgs {
  input: ApplyPointToLanguageCourseRegistrationPaymentInput;
}

export interface MutationApplyPointToOrderArgs {
  input: ApplyOrderPointInput;
}

export interface MutationApplyPointToReservationArgs {
  input: ApplyPointToReservationArgs;
}

export interface MutationBulkCreateCartItemArgs {
  input: BulkCreateCartItemArgs;
}

export interface MutationBulkCreateIncomingMerchandiseArgs {
  input: Array<IncomingMerchandiseCreateInput>;
}

export interface MutationBulkCreateVoucherArgs {
  input: BulkCreateVoucherArgs;
}

export interface MutationBulkMoveMerchandiseToOtherWarehouseArgs {
  input: Array<MoveMerchandiseToOtherWarehouseInput>;
}

export interface MutationBulkReceiveMovedMerchandisesArgs {
  outgoingMerchandiseIds: Array<Scalars["ID"]>;
}

export interface MutationBulkSetRequiredInfoToLanguageCourseTranslationArgs {
  input: BulkSetRequiredInfoToLanguageCourseTranslationArgs;
}

export interface MutationBulkUpdateShippingInfoToOrderShippingArgs {
  input: Array<AddShippingInfoToOrderShippingForBulkInput>;
}

export interface MutationBulkUpdateSpotItemTransArgs {
  inputs: Array<UpsertSpotItemTransArgs>;
}

export interface MutationBulkUpdateSpotItemsArgs {
  inputs: Array<UpdateSpotItemArgs>;
}

export interface MutationCancelIncomingMerchandiseArgs {
  input: IncomingMerchandiseCancelInput;
}

export interface MutationCancelOrderShippingArgs {
  id: Scalars["ID"];
}

export interface MutationCancelOrderShippingItemArgs {
  input: CancelOrderShippingItemInput;
}

export interface MutationCancelPaymentReadyOrderShippingArgs {
  id: Scalars["ID"];
}

export interface MutationCancelRequestMerchandiseQuoteArgs {
  id: Scalars["ID"];
}

export interface MutationCancelReservationArgs {
  code: Scalars["Int"];
}

export interface MutationCancelReservationForUserArgs {
  code: Scalars["Int"];
}

export interface MutationChangeCartItemQuantityArgs {
  input: ChangeCartItemQuantityInput;
}

export interface MutationChangeMemberLevelArgs {
  input: ChangeMemberLevelArgs;
}

export interface MutationChangeMemberThumbnailArgs {
  input: ChangeMemberThumbnailArgs;
}

export interface MutationChangeNotificationToReadStatusArgs {
  code: Scalars["Int"];
}

export interface MutationChangePartnerPasswordArgs {
  input: ChangePartnerPassword;
}

export interface MutationChangePasswordArgs {
  input: ChangePasswordArgs;
}

export interface MutationChangeProxyShopHasMerchandisePriorityArgs {
  input: ProxyShopHasMerchandiseChangePriorityInput;
}

export interface MutationChangeProxyShopImagePriorityArgs {
  input: ProxyShopImageChangePriorityInput;
}

export interface MutationChangeProxyShopReviewImagePriorityArgs {
  input: ProxyShopReviewImageChangePriorityInput;
}

export interface MutationChangeProxyTagPriorityArgs {
  input: ProxyTagChangePriorityInput;
}

export interface MutationChangeReservationDateArgs {
  input: ChangeReservationDateArgs;
}

export interface MutationChangeWarehouseFromOrderShippingArgs {
  input: ChangeWarehouseInput;
}

export interface MutationCloseEventArgs {
  code: Scalars["Int"];
}

export interface MutationCloseEventTestArgs {
  date: Scalars["String"];
}

export interface MutationCompleteOrderArgs {
  id: Scalars["ID"];
}

export interface MutationCompleteOrderShippingArgs {
  id: Scalars["ID"];
}

export interface MutationCompletePreparingMerchandiseArgs {
  input: CompleteMerchandisePreparationInput;
}

export interface MutationConfirmLinePayForProxyArgs {
  input: ConfirmLinePayInput;
}

export interface MutationConfirmLinePayForTripArgs {
  args: ConfirmLinePayArgs;
}

export interface MutationConfirmReservationArgs {
  code: Scalars["Int"];
}

export interface MutationConfirmUserBlogArgs {
  input: ConfirmUserBlogArgs;
}

export interface MutationCopyLanguageCourseTranslationArgs {
  input: CopyLanguageCourseTranslationArgs;
}

export interface MutationCreateAddressOptionArgs {
  input: AddressOptionCreateInput;
}

export interface MutationCreateAdvertisementArgs {
  input: CreateAdvertisementArgs;
}

export interface MutationCreateBannerArgs {
  input: CreateBannerArgs;
}

export interface MutationCreateBlogArgs {
  input: CreateBlogArgs;
}

export interface MutationCreateBlogDraftForUserArgs {
  input: CreateUserBlogArgs;
}

export interface MutationCreateBlogReviewArgs {
  input: BlogReviewCreateArgs;
}

export interface MutationCreateCartItemArgs {
  input: CartItemCreateInput;
}

export interface MutationCreateCategoryArgs {
  input: CreateCategoryArgs;
}

export interface MutationCreateContractToPartnershipArgs {
  input: CreateContractToPartnershipArgs;
}

export interface MutationCreateDiscountIndividualProxyShopEventArgs {
  input: CreateDiscountIndividualProxyShopEventArgs;
}

export interface MutationCreateDiscountIndividualSpotEventArgs {
  input: CreateDiscountIndividualSpotEventArgs;
}

export interface MutationCreateDiscountProxyShopEventArgs {
  input: CreateDiscountProxyShopEventArgs;
}

export interface MutationCreateDiscountSpotEventArgs {
  input: CreateDiscountSpotEventArgs;
}

export interface MutationCreateDivisionArgs {
  input: DivisionCreateInput;
}

export interface MutationCreateDivisionSetArgs {
  input: DivisionSetCreateInput;
}

export interface MutationCreateExchangeWithTransArgs {
  input: CreateExchangeWithTransArgs;
}

export interface MutationCreateFaqArgs {
  input: CreateFaqArgs;
}

export interface MutationCreateFileToContractArgs {
  input: CreateFileToContractArgs;
}

export interface MutationCreateFreeShippingIndividualProxyShopEventArgs {
  input: CreateIndividualProxyShopEventArgs;
}

export interface MutationCreateFreeShippingProxyShopEventArgs {
  input: CreateFreeShippingProxyShopEventArgs;
}

export interface MutationCreateGetFreeIndividualProxyShopEventArgs {
  input: CreateIndividualProxyShopEventArgs;
}

export interface MutationCreateGetFreeIndividualSpotEventArgs {
  input: CreateGetFreeIndividualSpotEventArgs;
}

export interface MutationCreateGetFreeProxyShopEventArgs {
  input: CreateGetFreeProxyShopEventArgs;
}

export interface MutationCreateGetFreeSpotEventArgs {
  input: CreateGetFreeSpotEventArgs;
}

export interface MutationCreateGiftIndividualProxyShopEventArgs {
  input: CreateGiftIndividualProxyShopEventArgs;
}

export interface MutationCreateGiftProxyShopEventArgs {
  input: CreateGiftProxyShopEventArgs;
}

export interface MutationCreateImageToBlogArgs {
  input: CreateImageToBlogArgs;
}

export interface MutationCreateImageToSpotArgs {
  input: CreateImageToSpotArgs;
}

export interface MutationCreateImageToSpotItemArgs {
  input: CreateImageToSpotItemArgs;
}

export interface MutationCreateIncomingMerchandiseArgs {
  input: IncomingMerchandiseCreateInput;
}

export interface MutationCreateIndividualToShippingPolicyArgs {
  input: IndividualShippingPolicyCreateInput;
}

export interface MutationCreateItemToSpotArgs {
  input: CreateItemToSpotArgs;
}

export interface MutationCreateLanguageCourseArgs {
  input: CreateLanguageCourseArgs;
}

export interface MutationCreateLanguageCourseDormitoryArgs {
  input: CreateLanguageCourseDormitoryArgs;
}

export interface MutationCreateLanguageCourseRegistrationArgs {
  input: CreateLanguageCourseRegistrationArgs;
}

export interface MutationCreateLanguageCourseRequiredDocumentArgs {
  input: CreateLanguageCourseRequiredDocumentArgs;
}

export interface MutationCreateLanguageCourseRequiredInfoArgs {
  input: CreateLanguageCourseRequiredInfoArgs;
}

export interface MutationCreateLanguageCourseRequiredInfoGroupArgs {
  input: CreateLanguageCourseRequiredInfoGroupArgs;
}

export interface MutationCreateLanguageCourseSemesterArgs {
  input: CreateLanguageCourseSemesterArgs;
}

export interface MutationCreateLanguageCourseTagArgs {
  input: CreateLanguageCourseTagInput;
}

export interface MutationCreateMerchandiseArgs {
  input: MerchandiseCreateInput;
}

export interface MutationCreateNonSaleOutgoingMerchandiseArgs {
  input: NonSaleOutgoingMerchandiseCreateInput;
}

export interface MutationCreateOnlineCouponArgs {
  input: CreateOnlineCouponArgs;
}

export interface MutationCreateOnsiteCouponArgs {
  input: CreateOnsiteCouponArgs;
}

export interface MutationCreateOrderArgs {
  input: OrderCreateInput;
}

export interface MutationCreateOrderForNonUserArgs {
  input: OrderCreateInput;
}

export interface MutationCreatePartnerArgs {
  input: CreatePartnerArgs;
}

export interface MutationCreatePartnershipArgs {
  input: CreatePartnershipArgs;
}

export interface MutationCreateProxyShopArgs {
  input: ProxyShopCreateInput;
}

export interface MutationCreateProxyShopReviewArgs {
  input: ProxyShopReviewCreateInput;
}

export interface MutationCreateProxyTagCategoryRelationArgs {
  input: ProxyTagRelationCreateInput;
}

export interface MutationCreateProxyTagOptionRelationArgs {
  input: ProxyTagRelationCreateInput;
}

export interface MutationCreateProxyTagWithTranslationsArgs {
  input: ProxyTagCreateInput;
}

export interface MutationCreateRequestMerchandiseQuoteArgs {
  input: RequestMerchandiseQuoteCreateInput;
}

export interface MutationCreateRequiredInfoWithTransArgs {
  input: CreateRequiredInfoWithTransArgs;
}

export interface MutationCreateReservationArgs {
  input: CreateReservationArgs;
}

export interface MutationCreateReservationForNonUserArgs {
  input: CreateReservationArgs;
}

export interface MutationCreateReservationReviewArgs {
  input: ReservationReviewCreateArgs;
}

export interface MutationCreateShippingAddressArgs {
  input: ShippingAddressCreateInput;
}

export interface MutationCreateShippingAddressAboutShippingSiteArgs {
  shippingSiteId: Scalars["ID"];
}

export interface MutationCreateShippingPolicyArgs {
  input: ShippingPolicyCreateInput;
}

export interface MutationCreateShippingSiteArgs {
  input: ShippingSiteCreateInput;
}

export interface MutationCreateSpecialReservableTimeToReservationPolicyArgs {
  input: CreateSpecialReservableTimeToReservationPolicyArgs;
}

export interface MutationCreateSpotArgs {
  input: CreateSpotArgs;
}

export interface MutationCreateSpotReviewArgs {
  input: SpotReviewCreateArgs;
}

export interface MutationCreateTipArgs {
  input: CreateTipArgs;
}

export interface MutationCreateTransToAdvertisementArgs {
  input: CreateTransToAdvertisementArgs;
}

export interface MutationCreateVoucherArgs {
  input: CreateVoucherInput;
}

export interface MutationCreateVoucherTemplateArgs {
  input: CreateVoucherTemplateArgs;
}

export interface MutationCreateWarehouseArgs {
  input: WarehouseCreateInput;
}

export interface MutationDeclineUserBlogArgs {
  code: Scalars["Int"];
}

export interface MutationDeleteAddressOptionArgs {
  id: Scalars["ID"];
}

export interface MutationDeleteAdvertisementArgs {
  code: Scalars["Int"];
}

export interface MutationDeleteAdvertisementTransArgs {
  input: DeleteAdvertisementTransArgs;
}

export interface MutationDeleteBannerArgs {
  code: Scalars["Int"];
}

export interface MutationDeleteBlogArgs {
  code: Scalars["Int"];
}

export interface MutationDeleteBlogReviewArgs {
  code: Scalars["Int"];
}

export interface MutationDeleteBlogTransArgs {
  input: DeleteBlogTransArgs;
}

export interface MutationDeleteCartItemArgs {
  id: Scalars["ID"];
}

export interface MutationDeleteCategoryArgs {
  code: Scalars["Int"];
}

export interface MutationDeleteContractFromPartnershipArgs {
  input: DeleteContractFromPartnershipArgs;
}

export interface MutationDeleteCouponArgs {
  code: Scalars["Float"];
}

export interface MutationDeleteDivisionArgs {
  id: Scalars["ID"];
}

export interface MutationDeleteDivisionSetArgs {
  id: Scalars["ID"];
}

export interface MutationDeleteDraftBlogForUserArgs {
  code: Scalars["Int"];
}

export interface MutationDeleteExchangeArgs {
  code: Scalars["Int"];
}

export interface MutationDeleteFaqArgs {
  id: Scalars["ID"];
}

export interface MutationDeleteFileFromContractArgs {
  contractFileCode: Scalars["Int"];
}

export interface MutationDeleteImageFromBlogArgs {
  input: DeleteImageFromBlogArgs;
}

export interface MutationDeleteImageFromCouponArgs {
  code: Scalars["Float"];
}

export interface MutationDeleteImageFromRequiredInfoArgs {
  code: Scalars["Int"];
}

export interface MutationDeleteImageFromSpotArgs {
  input: DeleteImageFromSpotArgs;
}

export interface MutationDeleteImageFromSpotItemArgs {
  input: DeleteImageFromSpotItemArgs;
}

export interface MutationDeleteIndividualFromShippingPolicyArgs {
  id: Scalars["ID"];
}

export interface MutationDeleteIndividualProxyShopEventArgs {
  input: DeleteIndividualProxyShopEventArgs;
}

export interface MutationDeleteIndividualSpotEventArgs {
  input: DeleteIndividualSpotEventArgs;
}

export interface MutationDeleteItemFromSpotArgs {
  input: DeleteItemFromSpotArgs;
}

export interface MutationDeleteLanguageCourseArgs {
  id: Scalars["ID"];
}

export interface MutationDeleteLanguageCourseDormitoryArgs {
  id: Scalars["ID"];
}

export interface MutationDeleteLanguageCourseRequiredDocumentArgs {
  id: Scalars["ID"];
}

export interface MutationDeleteLanguageCourseRequiredInfoArgs {
  id: Scalars["ID"];
}

export interface MutationDeleteLanguageCourseRequiredInfoGroupArgs {
  id: Scalars["ID"];
}

export interface MutationDeleteLanguageCourseSemesterArgs {
  semesterId: Scalars["ID"];
}

export interface MutationDeleteLanguageCourseTagArgs {
  id: Scalars["ID"];
}

export interface MutationDeleteLanguageCourseTranslationArgs {
  id: Scalars["ID"];
}

export interface MutationDeleteMemberArgs {
  code: Scalars["Int"];
}

export interface MutationDeleteMerchandiseArgs {
  id: Scalars["ID"];
}

export interface MutationDeleteNotificationArgs {
  code: Scalars["Int"];
}

export interface MutationDeleteOptionPairArgs {
  id: Scalars["ID"];
}

export interface MutationDeletePartnershipArgs {
  code: Scalars["Int"];
}

export interface MutationDeleteProxyShopArgs {
  id: Scalars["ID"];
}

export interface MutationDeleteProxyShopEventArgs {
  id: Scalars["ID"];
}

export interface MutationDeleteProxyShopReviewArgs {
  id: Scalars["ID"];
}

export interface MutationDeleteProxyTagArgs {
  id: Scalars["ID"];
}

export interface MutationDeleteProxyTagRelationArgs {
  input: ProxyTagRelationDeleteInput;
}

export interface MutationDeletePsdFromCouponArgs {
  code: Scalars["Float"];
}

export interface MutationDeleteRequiredInfoArgs {
  code: Scalars["Int"];
}

export interface MutationDeleteSearchHistoryArgs {
  keyword: Scalars["String"];
}

export interface MutationDeleteShippingAddressArgs {
  id: Scalars["ID"];
}

export interface MutationDeleteShippingPolicyArgs {
  id: Scalars["ID"];
}

export interface MutationDeleteShippingSiteArgs {
  id: Scalars["ID"];
}

export interface MutationDeleteSpecialReservableTimeFromReservationPolicyArgs {
  input: DeleteSpecialReservableTimeFromReservationPolicyArgs;
}

export interface MutationDeleteSpotArgs {
  code: Scalars["Int"];
}

export interface MutationDeleteSpotEventArgs {
  code: Scalars["Int"];
}

export interface MutationDeleteSpotReviewArgs {
  code: Scalars["Int"];
}

export interface MutationDeleteTipArgs {
  code: Scalars["Int"];
}

export interface MutationDeleteVoucherArgs {
  code: Scalars["Int"];
}

export interface MutationDeleteVoucherTemplateArgs {
  code: Scalars["Int"];
}

export interface MutationDeleteWarehouseArgs {
  id: Scalars["ID"];
}

export interface MutationExpireMemberFromFcmTokenInfoArgs {
  udid: Scalars["String"];
}

export interface MutationForceCloseProxyShopEventArgs {
  id: Scalars["ID"];
}

export interface MutationGivePointCompensationArgs {
  input: GivePointCompensationArgs;
}

export interface MutationIntegrateSocialAccountArgs {
  input: SocialInfoArgs;
}

export interface MutationIssueVouchersToReservationArgs {
  input: IssueVouchersToReservationArgs;
}

export interface MutationLinkBannerAndBlogArgs {
  input: LinkBannerAndBlogArgs;
}

export interface MutationLinkBannerAndProxyShopArgs {
  input: LinkBannerAndProxyShopArgs;
}

export interface MutationLinkBannerAndSpotArgs {
  input: LinkBannerAndSpotArgs;
}

export interface MutationLinkCategoryToBlogArgs {
  input: LinkCategoryToBlogArgs;
}

export interface MutationLinkCategoryToSpotArgs {
  input: LinkCategoryToSpotArgs;
}

export interface MutationLinkChildCategoryToParentArgs {
  input: LinkChildCategoryToParentArgs;
}

export interface MutationLinkMerchandiseAndPartnerShipArgs {
  input: LinkMerchandiseAndPartnerShipInput;
}

export interface MutationLinkProxyShopAndBlogArgs {
  input: LinkProxyShopAndBlogInput;
}

export interface MutationLinkSpotToCouponArgs {
  input: AddSpotToCouponArgs;
}

export interface MutationLoginArgs {
  input: SignInArgs;
}

export interface MutationManualUseVoucherArgs {
  input: UseVoucherArgs;
}

export interface MutationMoveMerchandiseToOtherWarehouseArgs {
  input: MoveMerchandiseToOtherWarehouseInput;
}

export interface MutationOverwriteDesktopImageToAdvertisementTransArgs {
  input: OverwriteDesktopImageToAdvertisementTransArgs;
}

export interface MutationOverwriteImageToAdvertisementTransArgs {
  input: OverwriteImageToAdvertisementTransArgs;
}

export interface MutationOverwriteMobileImageToAdvertisementTransArgs {
  input: OverwriteMobileImageToAdvertisementTransArgs;
}

export interface MutationOverwriteTabletImageToAdvertisementTransArgs {
  input: OverwriteTabletImageToAdvertisementTransArgs;
}

export interface MutationPurchaseCompleteOrderShippingArgs {
  id: Scalars["ID"];
}

export interface MutationReceiveIncomingMerchandiseArgs {
  input: IncomingMerchandiseReceiveInput;
}

export interface MutationReceiveMovedMerchandisesArgs {
  input: ReceiveMovedMerchandisesInput;
}

export interface MutationRefundOrCancelForNonUserArgs {
  input: RefundReservationForNonUserArgs;
}

export interface MutationRefundReservationArgs {
  input: RefundReservationArgs;
}

export interface MutationRegisterFcmTokenInfoArgs {
  input: RegisterFcmTokenInfoArgs;
}

export interface MutationRejectOrderShippingCancelRequestArgs {
  id: Scalars["ID"];
}

export interface MutationRemoveBlogFromAdvertisementArgs {
  advertisementCode: Scalars["Int"];
}

export interface MutationRemoveBlogFromSpotArgs {
  input: RemoveBlogFromSpotArgs;
}

export interface MutationRemoveCategoryFromProxyShopArgs {
  input: ProxyShopCategoryDeleteInput;
}

export interface MutationRemoveCouponFromMemberArgs {
  couponCode: Scalars["Float"];
}

export interface MutationRemoveCurrencyExchangePriceFromExchangeArgs {
  input: RemoveCurrencyExchangePriceArgs;
}

export interface MutationRemoveExcludedShippingPolicyFromProxyShopArgs {
  input: ProxyShopHasExcludedShippingPolicyDeleteInput;
}

export interface MutationRemoveHashtagFromLanguageCourseTranslationArgs {
  input: RemoveHashtagFromLanguageCourseTranslationArgs;
}

export interface MutationRemoveHashtagFromProxyShopArgs {
  input: ProxyShopHasHashtagDeleteInput;
}

export interface MutationRemoveImageFromProxyShopArgs {
  input: ProxyShopImageDeleteInput;
}

export interface MutationRemoveImageFromProxyShopReviewArgs {
  input: ProxyShopReviewImageDeleteInput;
}

export interface MutationRemoveImageFromSpotReviewArgs {
  input: SpotReviewImageDeleteArgs;
}

export interface MutationRemoveLanguageCourseRegistrationRequiredDocumentFileArgs {
  input: RemoveFileToLanguageCourseRegistrationRequiredDocumentArgs;
}

export interface MutationRemoveMerchandiseFromProxyShopArgs {
  input: ProxyShopHasMerchandiseDeleteInput;
}

export interface MutationRemovePercentRefundPolicyArgs {
  input: RemovePercentRefundPolicyArgs;
}

export interface MutationRemoveProxyShopFromAdvertisementArgs {
  input: RemoveProxyShopFromAdvertisementArgs;
}

export interface MutationRemovePushMessageTypeToIgnoredListArgs {
  input: RemoveIgnoredPushMessageTypeArgs;
}

export interface MutationRemoveRemarkFromReservationPolicyArgs {
  input: RemoveRemarkFromReservationPolicyArgs;
}

export interface MutationRemoveRequiredInfoFromReservationPolicyArgs {
  input: RemoveRequiredInfoToReservationPolicyArgs;
}

export interface MutationRemoveSpotFromAdvertisementArgs {
  advertisementCode: Scalars["Int"];
}

export interface MutationRemoveSpotFromContractArgs {
  input: RemoveSpotFromContractArgs;
}

export interface MutationRemoveSpotFromCouponArgs {
  input: RemoveSpotFromCouponArgs;
}

export interface MutationRemoveSpotFromVoucherTemplateArgs {
  input: RemoveSpotFromVoucherTemplateArgs;
}

export interface MutationRemoveTagFromAdvertisementArgs {
  input: RemoveTagFromAdvertisementArgs;
}

export interface MutationRemoveTagToLanguageCourseTranslationArgs {
  input: RemoveTagToLanguageCourseTranslationInput;
}

export interface MutationRemoveTripHashtagFromBlogArgs {
  input: RemoveTripHashtagFromBlogTransArgs;
}

export interface MutationRemoveTripHashtagFromSpotArgs {
  input: RemoveTripHashtagFromSpotTransArgs;
}

export interface MutationRemoveTypeFromBlogArgs {
  input: RemoveTypeFromBlogArgs;
}

export interface MutationRequestConfirmBlogForUserArgs {
  code: Scalars["Int"];
}

export interface MutationRequestOrderShippingCancellationArgs {
  id: Scalars["ID"];
}

export interface MutationRequestOrderShippingCancellationForNonUserArgs {
  input: CancelOrderShippingRequestForNonUserInput;
}

export interface MutationRequestResetPasswordArgs {
  input: RequestResetPasswordArgs;
}

export interface MutationResetOrderShippingArgs {
  input: ResetOrderShippingInput;
}

export interface MutationResetPasswordArgs {
  input: ResetPasswordArgs;
}

export interface MutationSendRequestMerchandiseQuoteArgs {
  id: Scalars["ID"];
}

export interface MutationSendReservationStatusMailArgs {
  code: Scalars["Int"];
}

export interface MutationSendSupportMailArgs {
  input: SendSupportMailArgs;
}

export interface MutationSendTestNotificationArgs {
  input: SendTestNotificationArgs;
}

export interface MutationSetAsUsedReservationArgs {
  code: Scalars["Int"];
}

export interface MutationSetBlogTransToTipArgs {
  input: SetBlogTransToTipArgs;
}

export interface MutationSetBrandImageArgs {
  input: SetBrandImageInput;
}

export interface MutationSetCityCategoryToLanguageCourseArgs {
  input: SetCityCategoryToLanguageCourseArgs;
}

export interface MutationSetDetailLocationCategoryToLanguageCourseArgs {
  input: SetDetailLocationCategoryToLanguageCourseArgs;
}

export interface MutationSetFaqActiveStatusArgs {
  input: SetFaqActiveStatusArgs;
}

export interface MutationSetGroupToLanguageCourseRequiredInfoArgs {
  input: SetGroupToLanguageCourseRequiredInfoArgs;
}

export interface MutationSetImageToCouponArgs {
  input: SetImageToCouponArgs;
}

export interface MutationSetLanguageCourseIsFemaleCollegeStatusArgs {
  input: SetLanguageCourseIsFemaleCollegeStatus;
}

export interface MutationSetLanguageCourseLikeStatusArgs {
  input: SetLanguageCourseLikeStatusArgs;
}

export interface MutationSetLanguageCourseRequiredInfoRequiredStatusArgs {
  input: SetLanguageCourseRequiredInfoRequiredStatusInput;
}

export interface MutationSetLanguageCourseTranslationPublishStatusArgs {
  input: SetLanguageCoursePublishStatusArgs;
}

export interface MutationSetMainImageToBlogTransArgs {
  input: SetMainImageToBlogTransArgs;
}

export interface MutationSetMainImageToLanguageCourseArgs {
  input: SetMainImageToLanguageCourseArgs;
}

export interface MutationSetMainLinkedMerchandiseArgs {
  input: SetMainLinkedMerchandiseInput;
}

export interface MutationSetMainProxyShopImageArgs {
  input: SetMainProxyShopImageInput;
}

export interface MutationSetMainSpotImageArgs {
  input: SetMainSpotImageArgs;
}

export interface MutationSetMainSpotItemArgs {
  input: SetMainSpotItemArgs;
}

export interface MutationSetMainSpotItemImageArgs {
  input: SetMainSpotItemImageArgs;
}

export interface MutationSetManagerToCouponArgs {
  input: SetManagerToCouponArgs;
}

export interface MutationSetManagerToLanguageCourseTranslationArgs {
  input: SetManagerToLanguageCourseTranslationArgs;
}

export interface MutationSetManagerToPartnershipArgs {
  input: SetManagerToPartnershipArgs;
}

export interface MutationSetManagerToTipArgs {
  input: SetManagerToTipArgs;
}

export interface MutationSetOpeningHoursArgs {
  input: SetOpeningHoursArgs;
}

export interface MutationSetPartnerToPartnershipArgs {
  input: SetPartnerToPartnershipArgs;
}

export interface MutationSetPartnershipToCouponArgs {
  input: SetPartnershipToCouponArgs;
}

export interface MutationSetPartnershipToLanguageCourseArgs {
  input: SetPartnershipToLanguageCourseArgs;
}

export interface MutationSetPrecautionToReservationArgs {
  input: SetPrecautionToReservationArgs;
}

export interface MutationSetProxyShopRocketStatusArgs {
  input: SetProxyShopRocketStatusInput;
}

export interface MutationSetPsdToCouponArgs {
  input: SetPsdToCouponArgs;
}

export interface MutationSetRequiredDocumentToLanguageCourseTranslationArgs {
  input: SetRequiredDocumentToLanguageCourseTranslationArgs;
}

export interface MutationSetRequiredInfoToLanguageCourseTranslationArgs {
  input: SetRequiredInfoToLanguageCourseTranslationArgs;
}

export interface MutationSetReservableTimesArgs {
  input: SetReservableTimesArgs;
}

export interface MutationSetTipImageArgs {
  input: SetTipImageArgs;
}

export interface MutationSetVoucherTemplateManagerArgs {
  input: SetVoucherTemplateManagerArgs;
}

export interface MutationSetWarehouseActiveStatusArgs {
  input: SetWarehouseActiveStatusInput;
}

export interface MutationSignInArgs {
  input: SignInArgs;
}

export interface MutationSignInWithSocialArgs {
  input: SocialInfoArgs;
}

export interface MutationSignUpArgs {
  input: SignUpArgs;
}

export interface MutationSkipPaymentForOrderArgs {
  id: Scalars["ID"];
}

export interface MutationSkipPaymentForReservationArgs {
  code: Scalars["Int"];
}

export interface MutationSplitOrderShippingArgs {
  input: SplitOrderShippingInput;
}

export interface MutationStartEventTestArgs {
  date: Scalars["String"];
}

export interface MutationToggleAdvertisementTransPublishStatusArgs {
  input: ToggleAdvertisementTransStatusArgs;
}

export interface MutationToggleAdvertisementTransStatusArgs {
  input: ToggleAdvertisementTransStatusArgs;
}

export interface MutationToggleBannerPublishStatusArgs {
  code: Scalars["Float"];
}

export interface MutationToggleBlogTransStatusArgs {
  input: ToggleBlogTransStatusArgs;
}

export interface MutationToggleContractStatusArgs {
  input: ToggleContactStatusArgs;
}

export interface MutationToggleCouponActiveStatusArgs {
  code: Scalars["Int"];
}

export interface MutationToggleExchangeStatusArgs {
  input: ToggleExchangeStatusArgs;
}

export interface MutationToggleLikeBlogArgs {
  blogCode: Scalars["Int"];
}

export interface MutationToggleLikeProxyShopArgs {
  id: Scalars["ID"];
}

export interface MutationToggleLikeSpotArgs {
  spotCode: Scalars["Int"];
}

export interface MutationToggleMerchandiseActiveStatusArgs {
  id: Scalars["ID"];
}

export interface MutationTogglePartnershipStatusArgs {
  input: TogglePartnershipStatusArgs;
}

export interface MutationToggleProxyShopDisplayDiscountStatusArgs {
  id: Scalars["ID"];
}

export interface MutationToggleProxyShopHasMerchandiseActiveStatusArgs {
  id: Scalars["ID"];
}

export interface MutationToggleProxyShopPublishStatusArgs {
  id: Scalars["ID"];
}

export interface MutationToggleProxyShopRecommendStatusArgs {
  id: Scalars["ID"];
}

export interface MutationToggleProxyTagRecommendStatusArgs {
  id: Scalars["ID"];
}

export interface MutationToggleRequiredInfoStatusArgs {
  input: ToggleRequiredInfoStatusArgs;
}

export interface MutationToggleReservationPolicyStatusArgs {
  input: ToggleReservationPolicyStatusArgs;
}

export interface MutationToggleShippingPolicyActiveStatusArgs {
  id: Scalars["ID"];
}

export interface MutationToggleSpotItemStatusArgs {
  input: ToggleSpotItemStatusArgs;
}

export interface MutationToggleSpotStatusArgs {
  input: ToggleSpotStatusArgs;
}

export interface MutationToggleSpotTransStatusArgs {
  input: ToggleSpotTransStatusArgs;
}

export interface MutationToggleTipActiveStatusArgs {
  code: Scalars["Int"];
}

export interface MutationToggleTripHashtagRecommendStatusArgs {
  code: Scalars["Int"];
}

export interface MutationUnlinkBannerAndBlogArgs {
  input: UnlinkBannerAndBlogArgs;
}

export interface MutationUnlinkBannerAndProxyShopArgs {
  input: UnlinkBannerAndProxyShopArgs;
}

export interface MutationUnlinkBannerAndSpotArgs {
  input: UnlinkBannerAndSpotArgs;
}

export interface MutationUnlinkCategoryFromBlogArgs {
  input: UnlinkCategoryFromBlogArgs;
}

export interface MutationUnlinkCategoryFromSpotArgs {
  input: UnlinkCategoryFromSpotArgs;
}

export interface MutationUnlinkChildCategoryFromParentArgs {
  input: UnlinkChildCategoryFromParentArgs;
}

export interface MutationUnlinkMerchandiseAndPartnerShipArgs {
  input: UnlinkMerchandiseAndPartnerShipInput;
}

export interface MutationUnlinkProxyShopAndBlogArgs {
  input: UnlinkProxyShopAndBlogInput;
}

export interface MutationUnlinkSpotFromCouponArgs {
  input: RemoveSpotFromCouponArgs;
}

export interface MutationUnsetBrandImageArgs {
  id: Scalars["ID"];
}

export interface MutationUnsetManagerFromPartnershipArgs {
  input: UnsetManagerFromPartnershipArgs;
}

export interface MutationUnsetPartnerFromPartnershipArgs {
  input: UnsetPartnerFromPartnershipArgs;
}

export interface MutationUpdateAddressOptionArgs {
  input: AddressOptionUpdateInput;
}

export interface MutationUpdateAdvertisementArgs {
  input: UpdateAdvertisementArgs;
}

export interface MutationUpdateAdvertisementTransArgs {
  input: UpdateAdvertisementTransArgs;
}

export interface MutationUpdateBannerArgs {
  input: UpdateBannerArgs;
}

export interface MutationUpdateBlogForUserArgs {
  input: UpdateUserBlogArgs;
}

export interface MutationUpdateBlogReviewArgs {
  input: BlogReviewUpdateArgs;
}

export interface MutationUpdateBlogTransRenewalDateArgs {
  code: Scalars["Int"];
}

export interface MutationUpdateCategoryArgs {
  input: UpdateCategoryArgs;
}

export interface MutationUpdateCategoryPriorityArgs {
  input: UpdateCategoryPriorityArgs;
}

export interface MutationUpdateContractArgs {
  input: UpdateContractArgs;
}

export interface MutationUpdateCurrencyExchangePricesArgs {
  input: UpdateCurrencyExchangePricesArgs;
}

export interface MutationUpdateDiscountIndividualProxyShopEventArgs {
  input: UpdateDiscountIndividualProxyShopEventArgs;
}

export interface MutationUpdateDiscountIndividualSpotEventArgs {
  input: UpdateDiscountIndividualSpotEventArgs;
}

export interface MutationUpdateDiscountProxyShopEventArgs {
  input: UpdateProxyShopEventArgs;
}

export interface MutationUpdateDiscountSpotEventArgs {
  input: UpdateDiscountSpotEventArgs;
}

export interface MutationUpdateDivisionArgs {
  input: DivisionUpdateInput;
}

export interface MutationUpdateDivisionSetArgs {
  input: DivisionSetUpdateInput;
}

export interface MutationUpdateExchangeWithTransArgs {
  input: UpdateExchangeWithTransArgs;
}

export interface MutationUpdateExpectedArrivalToOrderShippingArgs {
  input: UpdateExpectedArrivalToOrderShippingInput;
}

export interface MutationUpdateFaqArgs {
  input: UpdateFaqArgs;
}

export interface MutationUpdateFaqPriorityArgs {
  input: UpdateFaqPriorityArgs;
}

export interface MutationUpdateFreeShippingPolicyArgs {
  input: FreeShippingPolicyUpdateInput;
}

export interface MutationUpdateFreeShippingProxyShopEventArgs {
  input: UpdateProxyShopEventArgs;
}

export interface MutationUpdateGetFreeProxyShopEventArgs {
  input: UpdateGetFreeProxyShopEventArgs;
}

export interface MutationUpdateGetFreeSpotEventArgs {
  input: UpdateGetFreeSpotEventArgs;
}

export interface MutationUpdateGiftIndividualProxyShopEventArgs {
  input: UpdateGiftIndividualProxyShopEventArgs;
}

export interface MutationUpdateGiftProxyShopEventArgs {
  input: UpdateGiftProxyShopEventArgs;
}

export interface MutationUpdateImageToProxyShopArgs {
  input: ProxyShopImageUpdateInput;
}

export interface MutationUpdateIncomingMerchandiseArgs {
  input: IncomingMerchandiseUpdateInput;
}

export interface MutationUpdateIndividualShippingPolicyArgs {
  input: IndividualShippingPolicyUpdateInput;
}

export interface MutationUpdateLanguageCourseArgs {
  input: UpdateLanguageCourseArgs;
}

export interface MutationUpdateLanguageCourseDormitoryTranslationArgs {
  input: UpdateLanguageCourseDormitoryTranslationArgs;
}

export interface MutationUpdateLanguageCourseHasRequiredDocumentArgs {
  input: UpdateLanguageCourseHasRequiredDocumentArgs;
}

export interface MutationUpdateLanguageCoursePriceInfoArgs {
  input: UpdateLanguageCoursePriceInfoArgs;
}

export interface MutationUpdateLanguageCourseRequiredDocumentArgs {
  input: UpdateLanguageCourseRequiredDocumentArgs;
}

export interface MutationUpdateLanguageCourseRequiredInfoArgs {
  input: UpdateLanguageCourseRequiredInfoArgs;
}

export interface MutationUpdateLanguageCourseRequiredInfoGroupArgs {
  input: UpdateLanguageCourseRequiredInfoGroupArgs;
}

export interface MutationUpdateLanguageCourseRequiredInfoGroupPriorityArgs {
  input: UpdateLanguageCourseRequiredInfoGroupPriorityArgs;
}

export interface MutationUpdateLanguageCourseRequiredInfoPriorityArgs {
  input: UpdateLanguageCourseRequiredInfoPriorityArgs;
}

export interface MutationUpdateLanguageCourseTagArgs {
  input: UpdateLanguageCourseTagInput;
}

export interface MutationUpdateLanguageCourseTranslationArgs {
  input: UpdateLanguageCourseTranslationArgs;
}

export interface MutationUpdateLanguageCourseTranslationNameArgs {
  input: UpdateLanguageCourseTranslationNameArgs;
}

export interface MutationUpdateLanguageCourseTranslationRenewalDateArgs {
  id: Scalars["ID"];
}

export interface MutationUpdateLinkedMerchandiseArgs {
  input: ProxyShopHasMerchandiseUpdateInput;
}

export interface MutationUpdateMerchandiseArgs {
  input: MerchandiseUpdateInput;
}

export interface MutationUpdateOnlineCouponArgs {
  input: UpdateOnlineCouponArgs;
}

export interface MutationUpdateOnsiteCouponArgs {
  input: UpdateOnsiteCouponArgs;
}

export interface MutationUpdateOrderArgs {
  input: OrderUpdateInput;
}

export interface MutationUpdateOrderBusinessUserInfoForInvoiceArgs {
  input: UpdateOrderBusinessUserInfoInput;
}

export interface MutationUpdateOrderRecipientInfoArgs {
  input: OrderRecipientInfoUpdateInput;
}

export interface MutationUpdateOrderRecipientInfoForNonUserArgs {
  input: OrderRecipientInfoUpdateForNonUserInput;
}

export interface MutationUpdateOrderUserInfoForInvoiceArgs {
  id: Scalars["ID"];
}

export interface MutationUpdatePartnerArgs {
  input: UpdatePartnerArgs;
}

export interface MutationUpdatePartnershipArgs {
  input: UpdatePartnershipArgs;
}

export interface MutationUpdatePercentRefundPolicyArgs {
  input: UpdatePercentRefundPolicyArgs;
}

export interface MutationUpdateProxyShopArgs {
  input: ProxyShopUpdateInput;
}

export interface MutationUpdateProxyShopRenewalDateArgs {
  id: Scalars["ID"];
}

export interface MutationUpdateProxyShopReviewArgs {
  input: ProxyShopReviewUpdateInput;
}

export interface MutationUpdateProxyTagArgs {
  input: ProxyTagUpdateInput;
}

export interface MutationUpdateRequestMerchandiseQuoteArgs {
  input: RequestMerchandiseQuoteUpdateInput;
}

export interface MutationUpdateRequiredInfoWithTransArgs {
  input: UpdateRequiredInfoWithTransArgs;
}

export interface MutationUpdateShippingPolicyArgs {
  input: ShippingPolicyUpdateInput;
}

export interface MutationUpdateShippingSiteArgs {
  input: ShippingSiteUpdateInput;
}

export interface MutationUpdateSpecialReservableTimeArgs {
  input: UpdateSpecialReservableTimeArgs;
}

export interface MutationUpdateSpotArgs {
  input: UpdateSpotArgs;
}

export interface MutationUpdateSpotImagePriorityArgs {
  input: UpdateSpotImagePriorityArgs;
}

export interface MutationUpdateSpotItemImagePriorityArgs {
  input: UpdateSpotItemImagePriorityArgs;
}

export interface MutationUpdateSpotItemPriorityArgs {
  input: UpdateSpotItemPriorityArgs;
}

export interface MutationUpdateSpotReviewArgs {
  input: SpotReviewUpdateArgs;
}

export interface MutationUpdateSpotTransRenewalDateArgs {
  code: Scalars["Int"];
}

export interface MutationUpdateTipArgs {
  input: UpdateTipArgs;
}

export interface MutationUpdateTipPriorityArgs {
  input: UpdateTipPriorityArgs;
}

export interface MutationUpdateUserArgs {
  input: UpdateUserArgs;
}

export interface MutationUpdateVoucherArgs {
  input: UpdateVoucherArgs;
}

export interface MutationUpdateVoucherTemplateArgs {
  input: UpdateVoucherTemplateArgs;
}

export interface MutationUpdateWarehouseArgs {
  input: WarehouseUpdateInput;
}

export interface MutationUploadDesktopImageToBannerArgs {
  input: UploadImageToBannerArgs;
}

export interface MutationUploadImageToRequiredInfoArgs {
  input: UploadImageToRequiredInfoArgs;
}

export interface MutationUploadLanguageCourseRegistrationRequiredDocumentFileArgs {
  input: UploadFileToLanguageCourseRegistrationRequiredDocumentArgs;
}

export interface MutationUploadMobileImageToBannerArgs {
  input: UploadImageToBannerArgs;
}

export interface MutationUploadTabletImageToBannerArgs {
  input: UploadImageToBannerArgs;
}

export interface MutationUploadTemplateFileToLanguageCourseHasRequiredDocumentArgs {
  input: UploadTemplateFileToLanguageCourseHasRequiredDocumentArgs;
}

export interface MutationUpsertBlogTransArgs {
  input: UpsertBlogTransArgs;
}

export interface MutationUpsertCurrencyExchangePriceToExchangeArgs {
  input: AddCurrencyExchangePriceArgs;
}

export interface MutationUpsertLanguageCourseDormitoryTranslationArgs {
  input: UpsertLanguageCourseDormitoryTranslationInput;
}

export interface MutationUpsertReservationPolicyArgs {
  input: UpsertReservationPolicyArgs;
}

export interface MutationUpsertSpotTransArgs {
  input: UpsertSpotTransArgs;
}

export interface Name {
  __typename?: "Name";
  korean: Scalars["String"];
  local: Scalars["String"];
}

export interface NameInput {
  korean: Scalars["String"];
  local: Scalars["String"];
}

export interface NonSaleOutgoingMerchandiseCreateInput {
  description?: InputMaybe<Scalars["String"]>;
  merchandiseId: Scalars["ID"];
  quantity: Scalars["Int"];
  saleAmount: Scalars["Float"];
  warehouseId: Scalars["ID"];
}

export interface Notification {
  __typename?: "Notification";
  code: Scalars["Int"];
  /** YYYY-MM-DD HH:mm:ss */
  createdAt: Scalars["Date"];
  id: Scalars["ID"];
  isRead: Scalars["Boolean"];
  /** Topic ????????? ?????? null?????? */
  language?: Maybe<LanguageType>;
  /** Topic ????????? ?????? null?????? */
  memberCode?: Maybe<Scalars["Int"]>;
  message: Scalars["String"];
  messageType: NotificationMessageType;
  /** ????????? ID, Ex) ????????????????????? reservationId ?????? */
  relationId?: Maybe<Scalars["Int"]>;
  title: Scalars["String"];
  type: NotificationType;
  /** YYYY-MM-DD HH:mm:ss */
  updatedAt: Scalars["Date"];
}

export interface NotificationFilter {
  isRead?: InputMaybe<Scalars["Boolean"]>;
  search?: InputMaybe<Scalars["String"]>;
  type?: InputMaybe<NotificationType>;
}

export type NotificationMessageType =
  | "ORDER_CANCELED"
  | "ORDER_COMPLETE"
  | "ORDER_PAYMENT_COMPLETE"
  | "ORDER_REQUEST_CONFIRM"
  | "ORDER_SHIPPING"
  | "QUOTE_CANCELED"
  | "QUOTE_CREATED"
  | "QUOTE_SENT"
  | "RESERVATION_CANCEL"
  | "RESERVATION_COMPLETE"
  | "RESERVATION_CONFIRM_REQUIRED"
  | "RESERVATION_USED";

export interface NotificationOrder {
  direction: OrderByDirectionType;
  field: NotificationOrderType;
}

export type NotificationOrderType = "CREATED_AT";

export interface NotificationPage {
  __typename?: "NotificationPage";
  edges: Array<Notification>;
  totalCount: Scalars["Int"];
}

export interface NotificationPageArgs {
  filter?: InputMaybe<NotificationFilter>;
  limit: Scalars["Int"];
  order?: InputMaybe<NotificationOrder>;
  page: Scalars["Int"];
}

/** TARGET : ??????, ?????? ?????? ????????? ????????? ?????? ??????, TOPIC : ?????????, ?????? ?????? ?????? ?????? */
export type NotificationType = "TARGET" | "TOPIC";

export interface OptionPair {
  __typename?: "OptionPair";
  /** YYYY-MM-DD HH:mm:ss */
  createdAt: Scalars["Date"];
  id: Scalars["ID"];
  merchandiseId: Scalars["ID"];
  name: ProxyTag;
  nameId: Scalars["ID"];
  /** YYYY-MM-DD HH:mm:ss */
  updatedAt: Scalars["Date"];
  value: ProxyTag;
  valueId: Scalars["ID"];
}

export interface OptionPairCreateWithoutMerchandiseInput {
  nameId: Scalars["ID"];
  valueId: Scalars["ID"];
}

export interface Order {
  __typename?: "Order";
  cancelableAmount: Scalars["Float"];
  canceledLocalizedPaymentAmount: Scalars["Float"];
  canceledLocalizedShippingFee: Scalars["Float"];
  code: Scalars["String"];
  /** YYYY-MM-DD HH:mm:ss */
  createdAt: Scalars["Date"];
  currency: CurrencyType;
  currencyRate: Scalars["Float"];
  currencyTimestamp: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  expirationDate?: Maybe<Scalars["Date"]>;
  id: Scalars["ID"];
  /** @deprecated OrderShipping?????? ?????? */
  invoiceNumber?: Maybe<Scalars["String"]>;
  isPaymentReady: Scalars["Boolean"];
  language: LanguageType;
  /** ?????? PG?????? ???????????? ?????? (?????? ????????? ??????) */
  localizedActualPaymentAmount: Scalars["Float"];
  /** ????????? ??? ?????? */
  localizedPaymentAmount: Scalars["Float"];
  localizedShippingFee: Scalars["Float"];
  orderShippings: Array<OrderShipping>;
  orderedMerchandises: Array<OrderedMerchandise>;
  ordererEmail: Scalars["String"];
  ordererName: Scalars["String"];
  ordererPhoneNumber: Scalars["String"];
  ordererSNS: Scalars["String"];
  paidDate?: Maybe<Scalars["Date"]>;
  paidId?: Maybe<Scalars["String"]>;
  paymentAmount: Scalars["Int"];
  paymentType?: Maybe<PaymentType>;
  paymentUrl?: Maybe<Scalars["String"]>;
  platform: Scalars["String"];
  recipientEmail: Scalars["String"];
  recipientEnName: Scalars["String"];
  recipientLocalName: Scalars["String"];
  recipientPhoneNumber: Scalars["String"];
  /** ????????? ????????? */
  restoredPoint: Scalars["Float"];
  shippingAddress: Scalars["String"];
  /** @deprecated OrderShipping?????? ?????? */
  shippingCompany?: Maybe<Scalars["String"]>;
  /**
   * ?????? ?????? ??????
   * @deprecated OrderShipping?????? ??????
   */
  shippingDescription?: Maybe<Scalars["String"]>;
  shippingFee: Scalars["Int"];
  /** ex) ????????? ?????? */
  shippingOptionalInfo?: Maybe<Scalars["String"]>;
  shippingPolicy: ShippingPolicy;
  shippingPolicyId: Scalars["ID"];
  shippingRequest?: Maybe<Scalars["String"]>;
  /**
   * ?????? ????????? ????????? ??? ?????? url
   * @deprecated OrderShipping?????? ??????
   */
  shippingUrl?: Maybe<Scalars["String"]>;
  shippingZipcode: Scalars["String"];
  status: OrderStatusType;
  /** YYYY-MM-DD HH:mm:ss */
  updatedAt: Scalars["Date"];
  /** ????????? ????????? */
  usedPoint: Scalars["Float"];
  user?: Maybe<Member>;
  userBusinessAddress?: Maybe<Scalars["String"]>;
  userBusinessName?: Maybe<Scalars["String"]>;
  userBusinessNumber?: Maybe<Scalars["String"]>;
  /** ????????? ????????? ?????? userId??? ?????? */
  userId?: Maybe<Scalars["ID"]>;
  userType?: Maybe<OrderUserType>;
}

export interface OrderOrderedMerchandisesArgs {
  type?: InputMaybe<MerchandiseType>;
}

export type OrderByDirectionType = "ASC" | "DESC";

export interface OrderCreateInput {
  currency: CurrencyType;
  language: LanguageType;
  orderedMerchandises: Array<OrderedMerchandiseInput>;
  ordererEmail: Scalars["String"];
  ordererName: Scalars["String"];
  ordererPhoneNumber: Scalars["String"];
  ordererSNS: Scalars["String"];
  platform: Scalars["String"];
  recipientEmail: Scalars["String"];
  recipientEnName: Scalars["String"];
  recipientLocalName: Scalars["String"];
  recipientPhoneNumber: Scalars["String"];
  shippingInfo: ShippingInfoInput;
}

export interface OrderExcelInput {
  createdAt?: InputMaybe<PeriodInput>;
  paidDate?: InputMaybe<PeriodInput>;
}

export interface OrderFilter {
  createdAt?: InputMaybe<PeriodInput>;
  merchandiseId?: InputMaybe<Scalars["ID"]>;
  paidDate?: InputMaybe<PeriodInput>;
  search?: InputMaybe<Scalars["String"]>;
  shippingPolicyId?: InputMaybe<Scalars["ID"]>;
  status?: InputMaybe<OrderStatusType>;
  warehouseId?: InputMaybe<Scalars["ID"]>;
}

export interface OrderForNonUserInput {
  orderCode: Scalars["String"];
}

export interface OrderOrder {
  direction: OrderByDirectionType;
  field: OrderOrderType;
}

export type OrderOrderType = "createdAt" | "id" | "paidDate";

export interface OrderPage {
  __typename?: "OrderPage";
  edges: Array<Order>;
  totalCount: Scalars["Int"];
}

export interface OrderPageInput {
  filter?: InputMaybe<OrderFilter>;
  limit: Scalars["Int"];
  order?: InputMaybe<OrderOrder>;
  page: Scalars["Int"];
}

export interface OrderRecipientInfoUpdateForNonUserInput {
  code: Scalars["String"];
  recipientEmail?: InputMaybe<Scalars["String"]>;
  recipientEnName?: InputMaybe<Scalars["String"]>;
  recipientLocalName?: InputMaybe<Scalars["String"]>;
  recipientPhoneNumber?: InputMaybe<Scalars["String"]>;
  shippingAddress?: InputMaybe<Scalars["String"]>;
  shippingZipcode?: InputMaybe<Scalars["String"]>;
}

export interface OrderRecipientInfoUpdateInput {
  id: Scalars["ID"];
  recipientEmail?: InputMaybe<Scalars["String"]>;
  recipientEnName?: InputMaybe<Scalars["String"]>;
  recipientLocalName?: InputMaybe<Scalars["String"]>;
  recipientPhoneNumber?: InputMaybe<Scalars["String"]>;
  shippingAddress?: InputMaybe<Scalars["String"]>;
  shippingZipcode?: InputMaybe<Scalars["String"]>;
}

export interface OrderShipping {
  __typename?: "OrderShipping";
  code: Scalars["String"];
  /** YYYY-MM-DD HH:mm:ss */
  createdAt: Scalars["Date"];
  expectedArrival?: Maybe<Scalars["Date"]>;
  id: Scalars["ID"];
  invoiceNumber?: Maybe<Scalars["String"]>;
  order: Order;
  orderId: Scalars["ID"];
  orderedMerchandises: Array<OrderedMerchandise>;
  shippingCompany?: Maybe<Scalars["String"]>;
  /** ?????? ????????? */
  shippingDate?: Maybe<Scalars["Date"]>;
  /** ?????? ?????? ?????? */
  shippingDescription?: Maybe<Scalars["String"]>;
  /** ?????? ????????? ????????? ??? ?????? url */
  shippingUrl?: Maybe<Scalars["String"]>;
  status: OrderShippingStatusType;
  /** YYYY-MM-DD HH:mm:ss */
  updatedAt: Scalars["Date"];
  warehouse: Warehouse;
  warehouseId: Scalars["ID"];
}

export interface OrderShippingFilter {
  createdAt?: InputMaybe<PeriodInput>;
  hasUnprocessedStatus?: InputMaybe<Scalars["Boolean"]>;
  isRocket?: InputMaybe<Scalars["Boolean"]>;
  merchandiseId?: InputMaybe<Scalars["ID"]>;
  paidDate?: InputMaybe<PeriodInput>;
  search?: InputMaybe<Scalars["String"]>;
  status?: InputMaybe<OrderShippingStatusType>;
  warehouseId?: InputMaybe<Scalars["ID"]>;
}

export interface OrderShippingForNonUserInput {
  orderShippingCode: Scalars["String"];
}

export interface OrderShippingOrder {
  direction: OrderByDirectionType;
  field: OrderShippingOrderFieldType;
}

export type OrderShippingOrderFieldType = "createdAt";

export interface OrderShippingPage {
  __typename?: "OrderShippingPage";
  edges: Array<OrderShipping>;
  totalCount: Scalars["Int"];
}

export interface OrderShippingPageArgs {
  filter?: InputMaybe<OrderShippingFilter>;
  limit: Scalars["Int"];
  order?: InputMaybe<OrderShippingOrder>;
  page: Scalars["Int"];
}

export type OrderShippingStatusType =
  | "CANCELED"
  | "CANCEL_REQUESTED"
  | "COMPLETED"
  | "PREPARING_DELIVERY"
  | "PREPARING_MERCHANDISE"
  | "PURCHASE_COMPLETED"
  | "SHIPPING_TO_END_POINT"
  | "UNPAID";

export type OrderStatusType =
  | "CANCELED"
  | "CANCEL_REQUESTED"
  | "CAN_BE_COMPLETED"
  | "COMPLETED"
  | "PREPARING_DELIVERY"
  | "PREPARING_MERCHANDISE"
  | "UNPAID";

export interface OrderUpdateInput {
  description?: InputMaybe<Scalars["String"]>;
  id: Scalars["ID"];
  shippingDescription?: InputMaybe<Scalars["String"]>;
}

export type OrderUserType = "BUSINESS" | "GENERAL";

export interface OrderedMerchandise {
  __typename?: "OrderedMerchandise";
  /** YYYY-MM-DD HH:mm:ss */
  createdAt: Scalars["Date"];
  eventId?: Maybe<Scalars["ID"]>;
  id: Scalars["ID"];
  isFreeShipping: Scalars["Boolean"];
  isRocket: Scalars["Boolean"];
  /** ????????? ?????? ?????? */
  koProxyShopTitle?: Maybe<Scalars["String"]>;
  /** ???????????? ???????????? ?????? ?????? */
  localName?: Maybe<Scalars["String"]>;
  /** ????????? ?????? */
  localProxyShopTitle?: Maybe<Scalars["String"]>;
  localizedSaleAmount: Scalars["Float"];
  localizedSalePrice: Scalars["Float"];
  manager?: Maybe<Member>;
  managerId?: Maybe<Scalars["ID"]>;
  merchandise: Merchandise;
  merchandiseId: Scalars["ID"];
  order: Order;
  orderId: Scalars["ID"];
  orderShippingId: Scalars["ID"];
  outgoingMerchandise?: Maybe<OutgoingMerchandise>;
  outgoingMerchandiseId?: Maybe<Scalars["ID"]>;
  proxyShop?: Maybe<ProxyShop>;
  proxyShopHasMerchandise?: Maybe<ProxyShopHasMerchandise>;
  proxyShopHasMerchandiseId?: Maybe<Scalars["ID"]>;
  proxyShopId?: Maybe<Scalars["ID"]>;
  quantity: Scalars["Int"];
  /** ?????? ?????? ????????? ????????? ?????? */
  quantityForCalculate: Scalars["Float"];
  saleAmount: Scalars["Int"];
  status: OrderedMerchandiseStatusType;
  type: OrderedMerchandiseType;
  /** YYYY-MM-DD HH:mm:ss */
  updatedAt: Scalars["Date"];
}

export interface OrderedMerchandiseInput {
  proxyShopHasMerchandiseId: Scalars["ID"];
  /** ?????? ?????? ??? ?????? */
  proxyShopId?: InputMaybe<Scalars["ID"]>;
  quantity: Scalars["Int"];
}

/** UNPAID: ?????? ???, UNPROCESSED: ?????? ??????, PREPARED: ?????? ?????? ??????, COMPLETE: ?????? ??????, CANCELED: ?????? */
export type OrderedMerchandiseStatusType =
  | "CANCELED"
  | "COMPLETED"
  | "PREPARED"
  | "UNPAID"
  | "UNPROCESSED";

/** REPROCESSING: ?????? ???????????? ???????????? ????????? ??????, NORMAL: ?????? ????????? ?????? */
export type OrderedMerchandiseType = "NORMAL" | "REPROCESSING";

export interface OutgoingMerchandise {
  __typename?: "OutgoingMerchandise";
  canceledAt?: Maybe<Scalars["Date"]>;
  code: Scalars["String"];
  /** YYYY-MM-DD HH:mm:ss */
  createdAt: Scalars["Date"];
  description?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  manager?: Maybe<Member>;
  managerId?: Maybe<Scalars["ID"]>;
  merchandise: Merchandise;
  merchandiseId: Scalars["ID"];
  merchandiseInAndOutLinks?: Maybe<Array<MerchandiseInAndOutLink>>;
  orderedMerchandise?: Maybe<OrderedMerchandise>;
  quantity: Scalars["Int"];
  saleAmount: Scalars["Int"];
  status: OutgoingMerchandiseStatusType;
  type: OutgoingMerchandiseType;
  /** YYYY-MM-DD HH:mm:ss */
  updatedAt: Scalars["Date"];
  warehouse: Warehouse;
  warehouseId: Scalars["ID"];
}

export interface OutgoingMerchandiseMerchandiseInAndOutLinksArgs {
  type?: InputMaybe<MerchandiseInAndOutLinkType>;
}

export interface OutgoingMerchandiseFilter {
  createdAt?: InputMaybe<PeriodInput>;
  linkedIncomingFilter?: InputMaybe<LinkedIncomingFilter>;
  merchandiseType?: InputMaybe<MerchandiseType>;
  search?: InputMaybe<Scalars["String"]>;
  status?: InputMaybe<OutgoingMerchandiseStatusType>;
  type?: InputMaybe<OutgoingMerchandiseType>;
  warehouseId?: InputMaybe<Scalars["ID"]>;
}

export interface OutgoingMerchandiseOrder {
  direction: OrderByDirectionType;
  field: OutgoingMerchandiseOrderType;
}

export type OutgoingMerchandiseOrderType = "createdAt";

export interface OutgoingMerchandisePage {
  __typename?: "OutgoingMerchandisePage";
  edges: Array<OutgoingMerchandise>;
  totalCount: Scalars["Int"];
}

export interface OutgoingMerchandisePageInput {
  filter?: InputMaybe<OutgoingMerchandiseFilter>;
  limit: Scalars["Int"];
  order?: InputMaybe<OutgoingMerchandiseOrder>;
  page: Scalars["Int"];
}

/** CANCELED??? ?????? ?????? ?????? ???????????? ??????, REFUNDED??? ?????? ?????? ??? ?????? */
export type OutgoingMerchandiseStatusType =
  | "CANCELED"
  | "COMPLETED"
  | "PREPARED"
  | "REFUNDED"
  | "UNPROCESSED";

export type OutgoingMerchandiseType =
  | "ETC"
  | "MOVEMENT"
  | "REPROCESSING"
  | "SALE";

export interface OverwriteDesktopImageToAdvertisementTransArgs {
  advertisementCode: Scalars["Int"];
  desktopImageUrl: Scalars["URL"];
  language: LanguageType;
}

export interface OverwriteImageToAdvertisementTransArgs {
  advertisementCode: Scalars["Int"];
  imageUrl: Scalars["URL"];
  language: LanguageType;
}

export interface OverwriteMobileImageToAdvertisementTransArgs {
  advertisementCode: Scalars["Int"];
  language: LanguageType;
  mobileImageUrl: Scalars["URL"];
}

export interface OverwriteTabletImageToAdvertisementTransArgs {
  advertisementCode: Scalars["Int"];
  language: LanguageType;
  tabletImageUrl: Scalars["URL"];
}

export interface Partnership {
  __typename?: "Partnership";
  accountHolder?: Maybe<Scalars["String"]>;
  /** ?????? ?????? */
  address?: Maybe<Scalars["String"]>;
  bank?: Maybe<Scalars["String"]>;
  bankAccount?: Maybe<Scalars["String"]>;
  /** ????????? ???????????? ?????? */
  businessItem?: Maybe<Scalars["String"]>;
  businessRegistrationNumber?: Maybe<Scalars["String"]>;
  /** ?????? */
  businessType?: Maybe<PartnershipBusinessType>;
  code: Scalars["Int"];
  companyName?: Maybe<Scalars["String"]>;
  contracts?: Maybe<Array<Contract>>;
  /** YYYY-MM-DD HH:mm:ss */
  createdAt: Scalars["Date"];
  /** ?????? ????????? */
  email?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  isActive: Scalars["Boolean"];
  mainCategory?: Maybe<PartnershipMainCategoryType>;
  manager?: Maybe<Member>;
  managerCode?: Maybe<Scalars["Float"]>;
  merchandises?: Maybe<Array<Merchandise>>;
  partner?: Maybe<Member>;
  partnerCode?: Maybe<Scalars["Float"]>;
  /** ?????? ???????????? ?????? */
  partnerName?: Maybe<Scalars["String"]>;
  partnershipCode?: Maybe<Scalars["String"]>;
  /** ?????? ????????? */
  phone?: Maybe<Scalars["String"]>;
  representativeName?: Maybe<Scalars["String"]>;
  /** ?????? ?????? ????????? ????????? */
  settlementPartnerEmail?: Maybe<Scalars["String"]>;
  /** ?????? ?????? ????????? ?????? */
  settlementPartnerName?: Maybe<Scalars["String"]>;
  /** ?????? ?????? ????????? ????????? */
  settlementPartnerPhone?: Maybe<Scalars["String"]>;
  specialNote?: Maybe<Scalars["String"]>;
  spots?: Maybe<Array<Spot>>;
  subCategory: PartnershipSubCategoryType;
  /** YYYY-MM-DD HH:mm:ss */
  updatedAt: Scalars["Date"];
  voucherTemplates?: Maybe<Array<VoucherTemplate>>;
}

export type PartnershipBusinessType =
  | "EDUCATION"
  | "HEALTH"
  | "NPO"
  | "RENTAL"
  | "RESTAURANT"
  | "SERVICE"
  | "TRANSPORT"
  | "WHOLESALE_OR_RETAIL";

export interface PartnershipFilter {
  businessType?: InputMaybe<PartnershipBusinessType>;
  createdAt?: InputMaybe<PeriodArgs>;
  isActive?: InputMaybe<Scalars["Boolean"]>;
  mainCategory?: InputMaybe<PartnershipMainCategoryType>;
  search?: InputMaybe<Scalars["String"]>;
  subCategory?: InputMaybe<PartnershipSubCategoryType>;
}

export interface PartnershipHasMerchandise {
  __typename?: "PartnershipHasMerchandise";
  contract: Contract;
  contractId: Scalars["ID"];
  /** YYYY-MM-DD HH:mm:ss */
  createdAt: Scalars["Date"];
  id: Scalars["ID"];
  merchandiseId: Scalars["ID"];
  partnership: Partnership;
  partnershipId: Scalars["ID"];
  /** YYYY-MM-DD HH:mm:ss */
  updatedAt: Scalars["Date"];
}

export type PartnershipMainCategoryType =
  | "LANGUAGE_SCHOOL"
  | "PROXY_SHOP"
  | "TRIP";

export interface PartnershipOrder {
  direction?: InputMaybe<OrderByDirectionType>;
  field: PartnershipOrderType;
}

export type PartnershipOrderType = "CREATED_AT";

export interface PartnershipPage {
  __typename?: "PartnershipPage";
  edges: Array<Partnership>;
  totalCount: Scalars["Int"];
}

export interface PartnershipPageArgs {
  filter?: InputMaybe<PartnershipFilter>;
  limit: Scalars["Int"];
  order?: InputMaybe<PartnershipOrder>;
  page: Scalars["Int"];
}

export type PartnershipStatusType = "ACTIVE";

export type PartnershipSubCategoryType =
  | "ACCOMMODATION"
  | "ACTIVITY"
  | "ATTRACTION"
  | "B2B"
  | "BEAUTY"
  | "CAFE"
  | "CONVENIENCE"
  | "DELIVERY"
  | "DIRECT_MANAGEMENT"
  | "EDUCATION"
  | "ETC"
  | "HANBOK"
  | "MEDICAL"
  | "PHOTO"
  | "REAL_ESTATE"
  | "RESTAURANT"
  | "SHOPPING"
  | "TOUR"
  | "TRANSPORTATION";

export type PaymentDomainType =
  | "LANGUAGE_COURSE"
  | "RESERVATION"
  | "SHOPPING_ORDER";

export interface PaymentHistory {
  __typename?: "PaymentHistory";
  amount: Scalars["Float"];
  /** YYYY-MM-DD HH:mm:ss */
  createdAt: Scalars["Date"];
  id: Scalars["ID"];
  paymentTransactionId: Scalars["Float"];
  status: PaymentHistoryStatus;
  /** YYYY-MM-DD HH:mm:ss */
  updatedAt: Scalars["Date"];
}

export type PaymentHistoryStatus =
  | "CANCELLED"
  | "FAILED"
  | "PAID"
  | "READY"
  | "REFUNDED";

export interface PaymentInfo {
  __typename?: "PaymentInfo";
  amount: Scalars["Float"];
  date: Scalars["Date"];
  id: Scalars["String"];
}

export interface PaymentInvoice {
  __typename?: "PaymentInvoice";
  amount: Scalars["Float"];
  /** YYYY-MM-DD HH:mm:ss */
  createdAt: Scalars["Date"];
  id: Scalars["ID"];
  invoiceNumber: Scalars["String"];
  issuedDate: Scalars["Date"];
  paymentTransactionId: Scalars["Float"];
  /** YYYY-MM-DD HH:mm:ss */
  updatedAt: Scalars["Date"];
}

export interface PaymentPriceInfo {
  __typename?: "PaymentPriceInfo";
  /** ?????? */
  krw: Scalars["Int"];
  /** ???????????? */
  local: Scalars["Float"];
}

export type PaymentStatus =
  | "CANCELLED"
  | "FAILED"
  | "PAID"
  | "PARTIAL_REFUNDED"
  | "READY";

export interface PaymentTransaction {
  __typename?: "PaymentTransaction";
  canceledAmount?: Maybe<Scalars["Float"]>;
  /** YYYY-MM-DD HH:mm:ss */
  createdAt: Scalars["Date"];
  currency: CurrencyType;
  domainTransactionId: Scalars["String"];
  domainType: PaymentDomainType;
  expirationDate?: Maybe<Scalars["Date"]>;
  id: Scalars["ID"];
  paidAmount: Scalars["Float"];
  paidDate?: Maybe<Scalars["Date"]>;
  paidPgId: Scalars["String"];
  paymentHistories: Array<PaymentHistory>;
  paymentInvoice?: Maybe<PaymentInvoice>;
  paymentType: PaymentType;
  paymentUrl?: Maybe<Scalars["String"]>;
  status: PaymentStatus;
  /** YYYY-MM-DD HH:mm:ss */
  updatedAt: Scalars["Date"];
}

export interface PaymentTransactionPage {
  __typename?: "PaymentTransactionPage";
  edges: Array<PaymentTransaction>;
  totalCount: Scalars["Int"];
}

export interface PaymentTransactionPageInput {
  limit: Scalars["Int"];
  page: Scalars["Int"];
}

/** IAMPORT type will be deprecated */
export type PaymentType =
  | "EC_PAY_ATM"
  | "EC_PAY_BARCODE"
  | "EC_PAY_CREDIT_CARD"
  | "EC_PAY_CVS"
  | "EC_PAY_WEBATM"
  | "EXIMBAY"
  | "IAMPORT"
  | "IAMPORT_CARD"
  | "IAMPORT_VBANK"
  | "LINEPAY"
  | "POINT";

export interface PercentRefundPolicy {
  __typename?: "PercentRefundPolicy";
  baseDate: Scalars["Int"];
  percent: Scalars["Int"];
}

export interface PercentRefundPolicyArgs {
  baseDate: Scalars["Int"];
  percent: Scalars["Int"];
}

export interface Period {
  __typename?: "Period";
  end: Scalars["Date"];
  start: Scalars["Date"];
}

export interface PeriodArgs {
  end: Scalars["Date"];
  start: Scalars["Date"];
}

export interface PeriodInput {
  end: Scalars["Date"];
  start: Scalars["Date"];
}

export interface PeriodObject {
  __typename?: "PeriodObject";
  end: Scalars["Date"];
  start: Scalars["Date"];
}

export interface Point {
  __typename?: "Point";
  CNY: Scalars["Float"];
  HKD: Scalars["Float"];
  JPY: Scalars["Float"];
  THB: Scalars["Float"];
  TWD: Scalars["Float"];
  USD: Scalars["Float"];
  VND: Scalars["Float"];
  code: Scalars["Int"];
  /** YYYY-MM-DD HH:mm:ss */
  createdAt: Scalars["Date"];
  histories: PointHistoryPage;
  id: Scalars["ID"];
  memberCode?: Maybe<Scalars["Int"]>;
  /** YYYY-MM-DD HH:mm:ss */
  updatedAt: Scalars["Date"];
}

export interface PointHistoriesArgs {
  input: PointHistoryPageArgs;
}

export interface PointHistory {
  __typename?: "PointHistory";
  code: Scalars["Int"];
  /** YYYY-MM-DD HH:mm:ss */
  createdAt: Scalars["Date"];
  currency: CurrencyType;
  id: Scalars["ID"];
  pointCode: Scalars["Int"];
  type: PointHistoryType;
  /** YYYY-MM-DD HH:mm:ss */
  updatedAt: Scalars["Date"];
  value: Scalars["Float"];
}

export interface PointHistoryFilter {
  currency: CurrencyType;
}

export interface PointHistoryOrder {
  direction: OrderByDirectionType;
  field: PointHistoryOrderType;
}

export type PointHistoryOrderType = "CREATED_AT";

export interface PointHistoryPage {
  __typename?: "PointHistoryPage";
  edges: Array<PointHistory>;
  totalCount: Scalars["Int"];
}

export interface PointHistoryPageArgs {
  filter: PointHistoryFilter;
  limit: Scalars["Int"];
  order?: InputMaybe<PointHistoryOrder>;
  page: Scalars["Int"];
}

export type PointHistoryType =
  | "EVENT_PARTICIPATE"
  | "EXPIRED"
  | "LANGUAGE_COURSE_USE"
  | "PROXY_IMAGE_REVIEW"
  | "PROXY_PURCHASE"
  | "PROXY_REVIEW"
  | "PROXY_UNUSE"
  | "PROXY_USE"
  | "RESERVATION_IMAGE_REVIEW"
  | "RESERVATION_PURCHASE"
  | "RESERVATION_REVIEW"
  | "RESERVATION_UNUSE"
  | "RESERVATION_USE"
  | "SHIPPING_DELAY"
  | "SYSTEM_ERROR"
  | "USER_BLOG";

export type PointRewardType =
  | "EVENT_PARTICIPATE"
  | "SHIPPING_DELAY"
  | "SYSTEM_ERROR";

export interface PossibleDatesArgs {
  /** YYYY-MM */
  date: Scalars["Date"];
  spotCode: Scalars["Int"];
}

export interface PossibleTimesArgs {
  /** YYYY-MM-DD HH:mm:ss */
  date: Scalars["Date"];
  spotCode: Scalars["Int"];
}

export interface PreSignedUrl {
  __typename?: "PreSignedUrl";
  headers?: Maybe<Array<Header>>;
  url: Scalars["String"];
}

export interface PreSignedUrlArgs {
  code?: InputMaybe<Scalars["Int"]>;
  domain: FileDomainType;
  filename: Scalars["String"];
}

export interface PreSignedUrlBrandInput {
  brandId?: InputMaybe<Scalars["ID"]>;
  fileName: Scalars["String"];
}

export interface PreSignedUrlForLanguageCourseHasRequiredDocumentTemplateFileArgs {
  /** ????????? */
  fileName: Scalars["String"];
  /** LanguageCourseHasRequiredDocument.id */
  id: Scalars["ID"];
}

/** ????????? ?????? ????????? ????????? preSignedUrl ?????? */
export interface PreSignedUrlForLanguageCourseMainImageArgs {
  /** ????????? */
  fileName: Scalars["String"];
  /** LanguageCourse.id */
  id: Scalars["ID"];
}

export interface PreSignedUrlForLanguageCourseRegistrationRequiredDocumentArgs {
  /** ????????? */
  fileName: Scalars["String"];
  /** LanguageCourseRegistration.id */
  id: Scalars["ID"];
}

export interface PreSignedUrlForMerchandiseInput {
  fileName: Scalars["String"];
}

export interface PreSignedUrlForRequestMerchandiseQuoteInput {
  fileName: Scalars["String"];
}

export interface PreSignedUrlProxyShopInput {
  fileName: Scalars["String"];
  proxyShopId: Scalars["ID"];
}

export interface ProxyShop {
  __typename?: "ProxyShop";
  /** ?????? ????????? ?????? brand??? null ?????? */
  brand?: Maybe<ProxyTag>;
  /** ?????? ????????? ?????? brandId??? null ?????? */
  brandId?: Maybe<Scalars["ID"]>;
  categories?: Maybe<Array<ProxyTag>>;
  content?: Maybe<Scalars["String"]>;
  /** YYYY-MM-DD HH:mm:ss */
  createdAt: Scalars["Date"];
  currentEvent?: Maybe<ProxyShopEvent>;
  currentEventId?: Maybe<Scalars["Int"]>;
  /** ????????? ???????????? ????????? ?????? text ?????? ?????? */
  currentEventMainString?: Maybe<Scalars["String"]>;
  currentEventPrice?: Maybe<Scalars["Int"]>;
  currentEventStart?: Maybe<Scalars["Date"]>;
  currentEventType?: Maybe<ProxyShopEventType>;
  deleteMember?: Maybe<Member>;
  deleteMemberId?: Maybe<Scalars["ID"]>;
  deletedAt?: Maybe<Scalars["Date"]>;
  excludedShippingPolicies?: Maybe<Array<ShippingPolicy>>;
  hashtags?: Maybe<Array<Hashtag>>;
  id: Scalars["ID"];
  identicalProxyShops?: Maybe<Array<ProxyShop>>;
  images?: Maybe<Array<ProxyShopImage>>;
  isDeleted: Scalars["Boolean"];
  /** @deprecated ??? ?????? ???????????? ?????? ?????? */
  isDisplayDiscount: Scalars["Boolean"];
  isLiked: Scalars["Boolean"];
  isPublish: Scalars["Boolean"];
  isRecommend: Scalars["Boolean"];
  isRocket: Scalars["Boolean"];
  koTitle: Scalars["String"];
  language: LanguageType;
  likeCount: Scalars["Int"];
  /** @deprecated ?????? ????????? user??? admin??? ??? ??? ?????? ????????? ????????? ??? -> ForUser, ForAdmin */
  linkedMerchandises?: Maybe<Array<ProxyShopHasMerchandise>>;
  /** Admin??? ?????? ?????? ?????? */
  linkedMerchandisesForAdmin?: Maybe<Array<ProxyShopHasMerchandise>>;
  /** User??? ?????? ?????? ?????? */
  linkedMerchandisesForUser?: Maybe<Array<ProxyShopHasMerchandise>>;
  localTitle: Scalars["String"];
  localizedOriginalPrice?: Maybe<Scalars["Float"]>;
  localizedSalePrice: Scalars["Float"];
  mainImageUrl?: Maybe<Scalars["String"]>;
  /** ?????? ???????????? ?????? ???????????? ??????(????????? ??????) */
  originalPrice?: Maybe<Scalars["Int"]>;
  precaution?: Maybe<Scalars["String"]>;
  renewalDate: Scalars["Date"];
  /** ???????????? ???????????? ????????? ?????? */
  requestMerchandiseQuote?: Maybe<RequestMerchandiseQuote>;
  reviewCount: Scalars["Int"];
  reviewPage?: Maybe<ProxyShopReviewPage>;
  reviews?: Maybe<Array<ProxyShopReview>>;
  /** ?????? ???????????? ?????? ???????????? ?????? ?????????(?????????) */
  salePrice: Scalars["Int"];
  starRatingAverage: Scalars["Float"];
  totalReviewRate: Scalars["Int"];
  type: ProxyShopType;
  /** YYYY-MM-DD HH:mm:ss */
  updatedAt: Scalars["Date"];
  videoUrl?: Maybe<Scalars["String"]>;
  viewCount: Scalars["Int"];
  writeMember?: Maybe<Member>;
  writeMemberId?: Maybe<Scalars["ID"]>;
}

export interface ProxyShopImagesArgs {
  isMain?: InputMaybe<Scalars["Boolean"]>;
}

export interface ProxyShopLocalizedOriginalPriceArgs {
  currency: CurrencyType;
}

export interface ProxyShopLocalizedSalePriceArgs {
  currency: CurrencyType;
}

export interface ProxyShopReviewPageArgs {
  input: ProxyShopReviewPageInput;
}

export interface ProxyShopCategoryCreateInput {
  proxyShopId: Scalars["ID"];
  proxyTagId: Scalars["ID"];
}

export interface ProxyShopCategoryDeleteInput {
  proxyShopId: Scalars["ID"];
  proxyTagId: Scalars["ID"];
}

export interface ProxyShopCreateInput {
  brandId: Scalars["ID"];
  categoryIds: Array<Scalars["ID"]>;
  koTitle: Scalars["String"];
  language: LanguageType;
  localTitle: Scalars["String"];
}

export interface ProxyShopEvent {
  createdAt: Scalars["Date"];
  description?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  language: LanguageType;
  limitCount?: Maybe<Scalars["Int"]>;
  manager: Member;
  managerId: Scalars["ID"];
  period: PeriodObject;
  proxyShop: ProxyShop;
  proxyShopId: Scalars["ID"];
  status: ProxyShopEventStatus;
  type: ProxyShopEventType;
  updatedAt: Scalars["Date"];
}

export interface ProxyShopEventFilter {
  language?: InputMaybe<LanguageType>;
  period?: InputMaybe<PeriodInput>;
  search?: InputMaybe<Scalars["String"]>;
  status?: InputMaybe<ProxyShopEventStatus>;
  type?: InputMaybe<ProxyShopEventType>;
}

export interface ProxyShopEventOrder {
  direction: OrderByDirectionType;
  field: ProxyShopEventOrderType;
}

export type ProxyShopEventOrderType = "createdAt";

export interface ProxyShopEventPage {
  __typename?: "ProxyShopEventPage";
  edges: Array<ProxyShopEvent>;
  totalCount: Scalars["Int"];
}

export interface ProxyShopEventPageArgs {
  filter?: InputMaybe<ProxyShopEventFilter>;
  limit: Scalars["Int"];
  order?: InputMaybe<ProxyShopEventOrder>;
  page: Scalars["Int"];
}

export type ProxyShopEventStatus = "CLOSED" | "ON_GOING" | "READY";

/** GET_FREE:  n+m ????????? (ex: 1+1) / DISCOUNT: ?????? ?????? / GIFT: ????????? / SHIPPING_FREE: ????????? ?????? */
export type ProxyShopEventType =
  | "DISCOUNT"
  | "FREE_SHIPPING"
  | "GET_FREE"
  | "GIFT";

export interface ProxyShopFilter {
  brandIds?: InputMaybe<Array<Scalars["ID"]>>;
  /** ????????????????????? ???????????? ???????????? ??????, OR ?????? ?????? */
  categoryIds?: InputMaybe<Array<Scalars["ID"]>>;
  /** ???????????????????????? ???????????? ???????????? ??????, AND ?????? ?????? */
  categoryIdsForAdmin?: InputMaybe<Array<Scalars["ID"]>>;
  createdAt?: InputMaybe<PeriodInput>;
  hasEvent?: InputMaybe<Scalars["Boolean"]>;
  isPublish?: InputMaybe<Scalars["Boolean"]>;
  isRecommend?: InputMaybe<Scalars["Boolean"]>;
  /** ?????? ???????????? ????????? ?????? filter, null?????? ?????? ????????? ??????(????????????, ??????????????? ?????? ??????) */
  isRocket?: InputMaybe<Scalars["Boolean"]>;
  language?: InputMaybe<LanguageType>;
  merchandiseId?: InputMaybe<Scalars["ID"]>;
  search?: InputMaybe<Scalars["String"]>;
}

export interface ProxyShopHasCategory {
  __typename?: "ProxyShopHasCategory";
  /** YYYY-MM-DD HH:mm:ss */
  createdAt: Scalars["Date"];
  id: Scalars["ID"];
  proxyShopId: Scalars["ID"];
  proxyTagId: Scalars["ID"];
  /** YYYY-MM-DD HH:mm:ss */
  updatedAt: Scalars["Date"];
}

export interface ProxyShopHasExcludedShippingPolicyCreateInput {
  proxyShopId: Scalars["ID"];
  shippingPolicyId: Scalars["ID"];
}

export interface ProxyShopHasExcludedShippingPolicyDeleteInput {
  proxyShopId: Scalars["ID"];
  shippingPolicyId: Scalars["ID"];
}

export interface ProxyShopHasHashtagCreateInput {
  name: Scalars["String"];
  proxyShopId: Scalars["ID"];
}

export interface ProxyShopHasHashtagDeleteInput {
  hashtagId: Scalars["ID"];
  proxyShopId: Scalars["ID"];
}

export interface ProxyShopHasMerchandise {
  __typename?: "ProxyShopHasMerchandise";
  /** YYYY-MM-DD HH:mm:ss */
  createdAt: Scalars["Date"];
  id: Scalars["ID"];
  individualProxyShopEvent?: Maybe<IndividualProxyShopEvent>;
  isActive: Scalars["Boolean"];
  isMain: Scalars["Boolean"];
  limitCount?: Maybe<Scalars["Int"]>;
  localName: Scalars["String"];
  localizedOriginalPrice?: Maybe<Scalars["Float"]>;
  localizedSalePrice: Scalars["Float"];
  merchandise: Merchandise;
  merchandiseId: Scalars["ID"];
  /** ??????(????????? ??????) */
  originalPrice?: Maybe<Scalars["Int"]>;
  priority: Scalars["Int"];
  proxyShop: ProxyShop;
  proxyShopId: Scalars["ID"];
  /** ?????????(?????????) */
  salePrice: Scalars["Int"];
  /** YYYY-MM-DD HH:mm:ss */
  updatedAt: Scalars["Date"];
}

export interface ProxyShopHasMerchandiseLocalizedOriginalPriceArgs {
  currency: CurrencyType;
}

export interface ProxyShopHasMerchandiseLocalizedSalePriceArgs {
  currency: CurrencyType;
}

export interface ProxyShopHasMerchandiseChangePriorityInput {
  proxyShopHasMerchandiseId: Scalars["ID"];
  proxyShopId: Scalars["ID"];
  targetPriority: Scalars["Int"];
}

export interface ProxyShopHasMerchandiseCreateInput {
  localName: Scalars["String"];
  merchandiseId: Scalars["ID"];
  /** ??????(????????? ??????) */
  originalPrice?: InputMaybe<Scalars["Int"]>;
  proxyShopId: Scalars["ID"];
  /** ?????????(?????????) */
  salePrice: Scalars["Int"];
}

export interface ProxyShopHasMerchandiseDeleteInput {
  proxyShopHasMerchandiseId: Scalars["ID"];
  proxyShopId: Scalars["ID"];
}

export interface ProxyShopHasMerchandiseUpdateInput {
  id: Scalars["ID"];
  localName?: InputMaybe<Scalars["String"]>;
  originalPrice?: InputMaybe<Scalars["Int"]>;
  salePrice?: InputMaybe<Scalars["Int"]>;
}

export interface ProxyShopImage {
  __typename?: "ProxyShopImage";
  altText: Scalars["String"];
  /** YYYY-MM-DD HH:mm:ss */
  createdAt: Scalars["Date"];
  id: Scalars["ID"];
  isMain: Scalars["Boolean"];
  priority: Scalars["Int"];
  proxyShop: ProxyShop;
  proxyShopId: Scalars["ID"];
  /** YYYY-MM-DD HH:mm:ss */
  updatedAt: Scalars["Date"];
  url: Scalars["String"];
}

export interface ProxyShopImageChangePriorityInput {
  proxyShopId: Scalars["ID"];
  proxyShopImageId: Scalars["ID"];
  targetPriority: Scalars["Int"];
}

export interface ProxyShopImageCreateInput {
  altText: Scalars["String"];
  proxyShopId: Scalars["ID"];
  url: Scalars["URL"];
}

export interface ProxyShopImageDeleteInput {
  proxyShopId: Scalars["ID"];
  proxyShopImageId: Scalars["ID"];
}

export interface ProxyShopImageUpdateInput {
  altText?: InputMaybe<Scalars["String"]>;
  proxyShopImageId: Scalars["ID"];
}

export interface ProxyShopOrder {
  direction: OrderByDirectionType;
  field: ProxyShopOrderType;
}

export type ProxyShopOrderType =
  | "createdAt"
  | "currentEventStart"
  | "likeCount"
  | "salePrice"
  | "viewCount";

export interface ProxyShopPage {
  __typename?: "ProxyShopPage";
  edges: Array<ProxyShop>;
  totalCount: Scalars["Int"];
}

export interface ProxyShopPageInput {
  filter?: InputMaybe<ProxyShopFilter>;
  limit: Scalars["Int"];
  order?: InputMaybe<ProxyShopOrder>;
  page: Scalars["Int"];
}

export interface ProxyShopReview {
  __typename?: "ProxyShopReview";
  content: Scalars["String"];
  /** YYYY-MM-DD HH:mm:ss */
  createdAt: Scalars["Date"];
  id: Scalars["ID"];
  images?: Maybe<Array<ProxyShopReviewImage>>;
  merchandise: Merchandise;
  merchandiseId: Scalars["ID"];
  orderShipping?: Maybe<OrderShipping>;
  orderShippingId: Scalars["ID"];
  proxyShop: ProxyShop;
  proxyShopHasMerchandise: ProxyShopHasMerchandise;
  proxyShopId: Scalars["ID"];
  starRating: Scalars["Float"];
  translations: Array<ProxyShopReviewTrans>;
  /** YYYY-MM-DD HH:mm:ss */
  updatedAt: Scalars["Date"];
  user: Member;
  userId: Scalars["ID"];
}

export interface ProxyShopReviewTranslationsArgs {
  language?: InputMaybe<LanguageType>;
}

export interface ProxyShopReviewCreateInput {
  content: Scalars["String"];
  /** ?????? ????????? ????????? ??? ????????????. */
  images?: InputMaybe<Array<ProxyShopReviewImageCreateInput>>;
  language?: InputMaybe<LanguageType>;
  merchandiseId: Scalars["ID"];
  orderShippingId: Scalars["ID"];
  proxyShopId: Scalars["ID"];
  starRating: Scalars["Float"];
}

export interface ProxyShopReviewFilter {
  hasImage?: InputMaybe<Scalars["Boolean"]>;
  merchandiseIds?: InputMaybe<Array<Scalars["ID"]>>;
  proxyShopId?: InputMaybe<Scalars["ID"]>;
  userId?: InputMaybe<Scalars["ID"]>;
}

export interface ProxyShopReviewImage {
  __typename?: "ProxyShopReviewImage";
  /** YYYY-MM-DD HH:mm:ss */
  createdAt: Scalars["Date"];
  id: Scalars["ID"];
  imageUrl: Scalars["String"];
  priority: Scalars["Int"];
  proxyShopReviewId: Scalars["ID"];
  /** YYYY-MM-DD HH:mm:ss */
  updatedAt: Scalars["Date"];
}

export interface ProxyShopReviewImageAddInput {
  imageUrl: Scalars["URL"];
  proxyShopReviewId: Scalars["ID"];
}

export interface ProxyShopReviewImageChangePriorityInput {
  proxyShopReviewId: Scalars["ID"];
  proxyShopReviewImageId: Scalars["ID"];
  targetPriority: Scalars["Int"];
}

export interface ProxyShopReviewImageCreateInput {
  imageUrl: Scalars["URL"];
  priority: Scalars["Int"];
}

export interface ProxyShopReviewImageDeleteInput {
  proxyShopReviewId: Scalars["ID"];
  proxyShopReviewImageId: Scalars["ID"];
}

export interface ProxyShopReviewOrder {
  direction: OrderByDirectionType;
  field: ProxyShopReviewOrderType;
}

export type ProxyShopReviewOrderType = "createdAt";

export interface ProxyShopReviewPage {
  __typename?: "ProxyShopReviewPage";
  edges: Array<ProxyShopReview>;
  starRatingAverage?: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
}

export interface ProxyShopReviewPageInput {
  filter?: InputMaybe<ProxyShopReviewFilter>;
  limit: Scalars["Int"];
  order?: InputMaybe<ProxyShopReviewOrder>;
  page: Scalars["Int"];
}

export interface ProxyShopReviewTrans {
  __typename?: "ProxyShopReviewTrans";
  content: Scalars["String"];
  /** YYYY-MM-DD HH:mm:ss */
  createdAt: Scalars["Date"];
  id: Scalars["ID"];
  language: LanguageType;
  proxyShopReview: ProxyShopReview;
  proxyShopReviewId: Scalars["ID"];
  /** YYYY-MM-DD HH:mm:ss */
  updatedAt: Scalars["Date"];
}

export interface ProxyShopReviewUpdateInput {
  content?: InputMaybe<Scalars["String"]>;
  proxyShopReviewId: Scalars["ID"];
  starRating?: InputMaybe<Scalars["Float"]>;
}

export type ProxyShopType = "GENERAL" | "REQUEST";

export interface ProxyShopUpdateInput {
  brandId?: InputMaybe<Scalars["ID"]>;
  content?: InputMaybe<Scalars["String"]>;
  id: Scalars["ID"];
  koTitle?: InputMaybe<Scalars["String"]>;
  localTitle?: InputMaybe<Scalars["String"]>;
  precaution?: InputMaybe<Scalars["String"]>;
  videoUrl?: InputMaybe<Scalars["String"]>;
}

export interface ProxyTag {
  __typename?: "ProxyTag";
  children?: Maybe<Array<ProxyTag>>;
  /** YYYY-MM-DD HH:mm:ss */
  createdAt: Scalars["Date"];
  id: Scalars["ID"];
  imageUrl?: Maybe<Scalars["String"]>;
  /** ???????????? ?????????????????? ???????????? isManaged??? true?????? */
  isManaged: Scalars["Boolean"];
  isRecommend: Scalars["Boolean"];
  parents?: Maybe<Array<ProxyTag>>;
  priority: Scalars["Int"];
  translations: Array<ProxyTagTranslation>;
  type: ProxyTagType;
  /** YYYY-MM-DD HH:mm:ss */
  updatedAt: Scalars["Date"];
}

export interface ProxyTagTranslationsArgs {
  language?: InputMaybe<LanguageType>;
}

export interface ProxyTagChangePriorityInput {
  proxyTagId: Scalars["ID"];
  targetPriority: Scalars["Int"];
  type: ProxyTagType;
}

export interface ProxyTagCreateInput {
  imagePath?: InputMaybe<Scalars["URL"]>;
  translations: Array<ProxyTagTranslationInput>;
  type: ProxyTagType;
}

export interface ProxyTagFilter {
  /** ???????????? ?????? ?????? ?????? ??????, true?????? ?????? ???????????? ??????????????? ?????? ???????????? ????????? ????????? ?????? */
  hasLinkedProxyShop?: InputMaybe<Scalars["Boolean"]>;
  /** ???????????? ?????????????????? ????????? ?????? */
  isManaged?: InputMaybe<Scalars["Boolean"]>;
  isRecommend?: InputMaybe<Scalars["Boolean"]>;
  language?: InputMaybe<LanguageType>;
  name?: InputMaybe<Scalars["String"]>;
  searchChar?: InputMaybe<SearchCharacterType>;
  type?: InputMaybe<ProxyTagType>;
}

export interface ProxyTagOrder {
  direction: OrderByDirectionType;
  field: ProxyTagOrderType;
}

export type ProxyTagOrderType = "createdAt" | "priority" | "type";

export interface ProxyTagPage {
  __typename?: "ProxyTagPage";
  edges: Array<ProxyTag>;
  totalCount: Scalars["Int"];
}

export interface ProxyTagPageInput {
  filter?: InputMaybe<ProxyTagFilter>;
  limit: Scalars["Int"];
  order?: InputMaybe<ProxyTagOrder>;
  page: Scalars["Int"];
}

export interface ProxyTagRelationCreateInput {
  childId: Scalars["ID"];
  parentId: Scalars["ID"];
}

export interface ProxyTagRelationDeleteInput {
  childId: Scalars["ID"];
  parentId: Scalars["ID"];
}

export interface ProxyTagTranslation {
  __typename?: "ProxyTagTranslation";
  /** YYYY-MM-DD HH:mm:ss */
  createdAt: Scalars["Date"];
  id: Scalars["ID"];
  language: LanguageType;
  name: Scalars["String"];
  /** YYYY-MM-DD HH:mm:ss */
  updatedAt: Scalars["Date"];
}

export interface ProxyTagTranslationInput {
  language: LanguageType;
  name: Scalars["String"];
}

export type ProxyTagType =
  | "BRAND"
  | "MAIN_PROXY_SHOPPING_CATEGORY"
  | "MIDDLE_PROXY_SHOPPING_CATEGORY"
  | "OPTION_NAME"
  | "OPTION_VALUE";

export interface ProxyTagUpdateInput {
  id: Scalars["ID"];
  translations?: InputMaybe<Array<ProxyTagTranslationInput>>;
}

export interface Query {
  __typename?: "Query";
  addressOption: AddressOption;
  addressOptions: AddressOptionPage;
  advertisement: Advertisement;
  advertisements: AdvertisementPage;
  banner: Banner;
  banners: BannerPage;
  blog: Blog;
  /**
   * ???????????? children??? ???????????? ????????? ?????????
   * @deprecated blog.reviews??? ?????? ??????
   */
  blogReviews: BlogReviewPage;
  blogs: BlogPage;
  cartItem: CartItem;
  /** admin ???????????? ????????? ??????????????? */
  cartItems: CartItemPage;
  categories: CategoryPage;
  category: Category;
  checkCanPurchaseMerchandise: Scalars["Boolean"];
  contractExcelDownloadUrl: Scalars["String"];
  contractFileDownloadUrl: Scalars["String"];
  coupon: Coupon;
  couponExcelDownloadUrl: Scalars["String"];
  coupons: CouponPage;
  currency: Currency;
  division: Division;
  divisionSet: DivisionSet;
  divisionSets: DivisionSetPage;
  divisions: DivisionPage;
  drafts: Array<Blog>;
  exchange: Exchange;
  exchanges: ExchangePage;
  faq: Faq;
  faqs: FaqPage;
  freeShippingPolicy: FreeShippingPolicy;
  healthCheck: HealthCheck;
  incomingMerchandise: IncomingMerchandise;
  incomingMerchandiseExcelDownloadUrl: Scalars["String"];
  incomingMerchandises: IncomingMerchandisePage;
  individualOrderShippingTemplateExcelDownloadUrl: Scalars["String"];
  languageCourse: LanguageCourse;
  languageCourseRegistration: LanguageCourseRegistration;
  languageCourseRegistrations: LanguageCourseRegistrationPage;
  languageCourseRequiredDocument: LanguageCourseRequiredDocument;
  languageCourseRequiredDocuments: LanguageCourseRequiredDocumentPage;
  languageCourseRequiredInfo: LanguageCourseRequiredInfo;
  languageCourseRequiredInfoGroup: LanguageCourseRequiredInfoGroup;
  languageCourseRequiredInfoGroups: Array<LanguageCourseRequiredInfoGroup>;
  languageCourseTag: LanguageCourseTag;
  languageCourseTags: LanguageCourseTagPage;
  languageCourses: LanguageCoursePage;
  linePayRequestUrlForProxy: LinePayRequestResult;
  linePayRequestUrlForReservation: LinePayRequestResult;
  /** @deprecated linePayRequestUrlForReservation??? ?????????????????? */
  linePayRequestUrlForTrip: LinePayRequestResult;
  linkedAddressOptions: Array<AddressOption>;
  member: Member;
  memberExcelDownloadUrl: Scalars["String"];
  memberLikedProxyShops: MemberLikedProxyShopPage;
  members: MemberPage;
  merchandise: Merchandise;
  merchandiseExcelDownloadUrl: Scalars["String"];
  merchandiseInAndOutLink: MerchandiseInAndOutLink;
  merchandiseInAndOutLinks: MerchandiseInAndOutLinkPage;
  merchandiseStockExcelDownloadUrl: Scalars["String"];
  merchandises: MerchandisePage;
  mostViewedBlogs: BlogPage;
  mostViewedProxyShops: ProxyShopPage;
  mostViewedSpots: SpotPage;
  /** ?????? ?????? */
  multiSearch: MultiSearchResult;
  /** ?????? ?????? history, searchHistories query??? ???????????? ????????? ?????? ?????? */
  multiSearchHistories: Array<Scalars["String"]>;
  /** ?????? ?????? */
  multiSearchWithFederation: MultiSearchResultFederation;
  myInfo: Member;
  notifications: NotificationPage;
  optionPair: OptionPair;
  order: Order;
  orderExcelDownloadUrl: Scalars["String"];
  orderForNonUser: Order;
  orderShipping: OrderShipping;
  orderShippingExcelDownloadUrl: Scalars["String"];
  orderShippingForNonUser: OrderShipping;
  orderShippingTemplateExcelDownloadUrl: Scalars["String"];
  orderShippings: OrderShippingPage;
  orders: OrderPage;
  outgoingMerchandise: OutgoingMerchandise;
  outgoingMerchandiseExcelDownloadUrl: Scalars["String"];
  outgoingMerchandiseMovementExcelDownloadUrl: Scalars["String"];
  outgoingMerchandises: OutgoingMerchandisePage;
  partnership: Partnership;
  partnerships: PartnershipPage;
  paymentTransaction: PaymentTransaction;
  paymentTransactions: PaymentTransactionPage;
  /** ???????????? ???????????????. ????????? myInfo.point ??? ?????????????????? */
  point: Point;
  possibleDates: Array<Scalars["String"]>;
  possibleTimes: Array<Scalars["String"]>;
  preSignedUrlForBrand: PreSignedUrl;
  preSignedUrlForLanguageCourseHasRequiredDocumentTemplateFile: PreSignedUrl;
  preSignedUrlForLanguageCourseMainImage: PreSignedUrl;
  preSignedUrlForLanguageCourseRegistrationRequiredDocument: PreSignedUrl;
  preSignedUrlForMerchandise: PreSignedUrl;
  preSignedUrlForProxyShop: PreSignedUrl;
  preSignedUrlForProxyShopReview: PreSignedUrl;
  /** ?????? ????????? ?????? ???????????? ????????? ????????? ????????? header??? null??? ????????? ?????? */
  preSignedUrlForRequestMerchandise: PreSignedUrl;
  preSignedUrlForUpload: PreSignedUrl;
  proxyShop: ProxyShop;
  proxyShopBrands: Array<ProxyTag>;
  proxyShopEvent: ProxyShopEvent;
  proxyShopEvents: ProxyShopEventPage;
  proxyShopMiddleCategories: Array<ProxyTag>;
  proxyShopReview: ProxyShopReview;
  proxyShopReviews: ProxyShopReviewPage;
  proxyShops: ProxyShopPage;
  proxyTag: ProxyTag;
  proxyTags: ProxyTagPage;
  /** ?????? ???????????? ?????? renewal??? ????????? <limitSize>??? ??? <size>??? ?????? ???????????? ??????????????? */
  recommendedBlogs: Array<Blog>;
  /** @deprecated ?????? ????????? ????????? ?????? ???????????? ?????????????????? recommendedRelatedProxyShops??? ????????? ?????? */
  recommendedProxyShops: ProxyShopPage;
  /** ?????? ????????? ????????? ????????? ??????????????? ????????? ?????? ???????????? ????????? ????????? */
  recommendedRelatedProxyShops: Array<ProxyShop>;
  /** ?????? ????????? ?????? renewal??? ?????? <limitSize>??? ??? <size>??? ?????? ???????????? ??????????????? */
  recommendedSpots: Array<Spot>;
  remarks: Array<Remark>;
  requestMerchandiseQuote: RequestMerchandiseQuote;
  requestMerchandiseQuoteExcelDownloadUrl: Scalars["String"];
  requestMerchandiseQuotes: RequestMerchandiseQuotePage;
  requiredInfo: RequiredInfo;
  requiredInfos: RequiredInfoPage;
  reservation: Reservation;
  reservationExcelDownloadUrl: Scalars["String"];
  reservationForNonUser: Reservation;
  reservations: ReservationPage;
  sameNameProxyShops: Array<ProxyShop>;
  searchBlogNew: SearchedBlogPage;
  searchBlogWithFederation: BlogPage;
  searchProxyShop: SearchedProxyShopPage;
  searchProxyShopWithFederation: ProxyShopPage;
  searchSpotNew: SearchedSpotPage;
  searchSpotWithFederation: SpotPage;
  searchSuggestions: Array<Scalars["String"]>;
  shippingAddress: ShippingAddress;
  shippingAddresses: Array<ShippingAddress>;
  shippingPolicies: ShippingPolicyPage;
  shippingPolicy: ShippingPolicy;
  shippingSite: ShippingSite;
  shippingSites: ShippingSitePage;
  signedUpSocialTypesByEmail: Array<SocialType>;
  spot: Spot;
  spotEvent: SpotEvent;
  spotEvents: SpotEventPage;
  /**
   * ???????????? children??? ???????????? ????????? ?????????
   * @deprecated spot.reviews??? ?????? ??????
   */
  spotReviews: SpotReviewPage;
  spots: SpotPage;
  tip: Tip;
  tips: TipPage;
  tripHashtags: TripHashtagPage;
  voucher: Voucher;
  voucherExcelDownloadUrl: Scalars["String"];
  voucherTemplate: VoucherTemplate;
  voucherTemplates: VoucherTemplatePage;
  vouchers: VoucherPage;
  warehouse: Warehouse;
  warehouses: WarehousePage;
  watchTogetherBlogs: Array<Blog>;
  watchTogetherSpots: Array<Spot>;
}

export interface QueryAddressOptionArgs {
  id: Scalars["ID"];
}

export interface QueryAddressOptionsArgs {
  input: AddressOptionPageInput;
}

export interface QueryAdvertisementArgs {
  code: Scalars["Int"];
}

export interface QueryAdvertisementsArgs {
  input: AdvertisementPageArgs;
}

export interface QueryBannerArgs {
  code: Scalars["Int"];
}

export interface QueryBannersArgs {
  input: BannerPageArgs;
}

export interface QueryBlogArgs {
  code: Scalars["Int"];
}

export interface QueryBlogReviewsArgs {
  input: BlogReviewPageArgs;
}

export interface QueryBlogsArgs {
  input: BlogPageArgs;
}

export interface QueryCartItemArgs {
  id: Scalars["ID"];
}

export interface QueryCartItemsArgs {
  input: CartItemPageInput;
}

export interface QueryCategoriesArgs {
  input: CategoryPageArgs;
}

export interface QueryCategoryArgs {
  code: Scalars["Int"];
}

export interface QueryCheckCanPurchaseMerchandiseArgs {
  input: Array<CheckCanPurchaseMerchandiseInput>;
}

export interface QueryContractFileDownloadUrlArgs {
  contractFileCode: Scalars["Int"];
}

export interface QueryCouponArgs {
  code: Scalars["Int"];
}

export interface QueryCouponExcelDownloadUrlArgs {
  input: CouponPageArgs;
}

export interface QueryCouponsArgs {
  input: CouponPageArgs;
}

export interface QueryDivisionArgs {
  id: Scalars["ID"];
}

export interface QueryDivisionSetArgs {
  id: Scalars["ID"];
}

export interface QueryDivisionSetsArgs {
  input: DivisionSetPageInput;
}

export interface QueryDivisionsArgs {
  input: DivisionPageInput;
}

export interface QueryDraftsArgs {
  language?: InputMaybe<LanguageType>;
}

export interface QueryExchangeArgs {
  code: Scalars["Int"];
}

export interface QueryExchangesArgs {
  input: ExchangePageArgs;
}

export interface QueryFaqArgs {
  id: Scalars["ID"];
}

export interface QueryFaqsArgs {
  input: FaqPageArgs;
}

export interface QueryIncomingMerchandiseArgs {
  id: Scalars["ID"];
}

export interface QueryIncomingMerchandiseExcelDownloadUrlArgs {
  input: IncomingMerchandisePageInput;
}

export interface QueryIncomingMerchandisesArgs {
  input: IncomingMerchandisePageInput;
}

export interface QueryIndividualOrderShippingTemplateExcelDownloadUrlArgs {
  id: Scalars["ID"];
}

export interface QueryLanguageCourseArgs {
  id: Scalars["ID"];
}

export interface QueryLanguageCourseRegistrationArgs {
  id: Scalars["ID"];
}

export interface QueryLanguageCourseRegistrationsArgs {
  input: LanguageCourseRegistrationPageInput;
}

export interface QueryLanguageCourseRequiredDocumentArgs {
  id: Scalars["ID"];
}

export interface QueryLanguageCourseRequiredDocumentsArgs {
  input: LanguageCourseRequiredDocumentPageArgs;
}

export interface QueryLanguageCourseRequiredInfoArgs {
  id: Scalars["ID"];
}

export interface QueryLanguageCourseRequiredInfoGroupArgs {
  id: Scalars["ID"];
}

export interface QueryLanguageCourseRequiredInfoGroupsArgs {
  input: LanguageCourseRequiredInfoGroupListFilterArgs;
}

export interface QueryLanguageCourseTagArgs {
  id: Scalars["ID"];
}

export interface QueryLanguageCourseTagsArgs {
  input: LanguageCourseTagPageInput;
}

export interface QueryLanguageCoursesArgs {
  input: LanguageCoursePageArgs;
}

export interface QueryLinePayRequestUrlForProxyArgs {
  input: LinePayRequestUrlInput;
}

export interface QueryLinePayRequestUrlForReservationArgs {
  args: LinePayRequestUrlInput;
}

export interface QueryLinePayRequestUrlForTripArgs {
  args: LinePayRequestUrlArgs;
}

export interface QueryLinkedAddressOptionsArgs {
  input: LinkedAddressOptionInput;
}

export interface QueryMemberArgs {
  code: Scalars["Int"];
}

export interface QueryMemberExcelDownloadUrlArgs {
  input: MemberPageArgs;
}

export interface QueryMemberLikedProxyShopsArgs {
  input: MemberLikedProxyShopPageInput;
}

export interface QueryMembersArgs {
  input: MemberPageArgs;
}

export interface QueryMerchandiseArgs {
  id: Scalars["ID"];
}

export interface QueryMerchandiseExcelDownloadUrlArgs {
  input: MerchandisePageInput;
}

export interface QueryMerchandiseInAndOutLinkArgs {
  id: Scalars["ID"];
}

export interface QueryMerchandiseInAndOutLinksArgs {
  input: MerchandiseInAndOutLinkPageInput;
}

export interface QueryMerchandiseStockExcelDownloadUrlArgs {
  input: MerchandisePageInput;
}

export interface QueryMerchandisesArgs {
  input: MerchandisePageInput;
}

export interface QueryMostViewedBlogsArgs {
  input: BlogMostViewedArgs;
}

export interface QueryMostViewedProxyShopsArgs {
  input: MostViewedProxyShopsArgs;
}

export interface QueryMostViewedSpotsArgs {
  input: SpotMostViewedArgs;
}

export interface QueryMultiSearchArgs {
  input: MultiSearchArgs;
}

export interface QueryMultiSearchWithFederationArgs {
  input: MultiSearchArgs;
}

export interface QueryNotificationsArgs {
  input: NotificationPageArgs;
}

export interface QueryOptionPairArgs {
  id: Scalars["ID"];
}

export interface QueryOrderArgs {
  id: Scalars["ID"];
}

export interface QueryOrderExcelDownloadUrlArgs {
  input: OrderExcelInput;
}

export interface QueryOrderForNonUserArgs {
  input: OrderForNonUserInput;
}

export interface QueryOrderShippingArgs {
  id: Scalars["ID"];
}

export interface QueryOrderShippingExcelDownloadUrlArgs {
  input: OrderShippingPageArgs;
}

export interface QueryOrderShippingForNonUserArgs {
  input: OrderShippingForNonUserInput;
}

export interface QueryOrderShippingTemplateExcelDownloadUrlArgs {
  input: OrderShippingPageArgs;
}

export interface QueryOrderShippingsArgs {
  input: OrderShippingPageArgs;
}

export interface QueryOrdersArgs {
  input: OrderPageInput;
}

export interface QueryOutgoingMerchandiseArgs {
  id: Scalars["ID"];
}

export interface QueryOutgoingMerchandiseExcelDownloadUrlArgs {
  input: OutgoingMerchandisePageInput;
}

export interface QueryOutgoingMerchandiseMovementExcelDownloadUrlArgs {
  input: OutgoingMerchandisePageInput;
}

export interface QueryOutgoingMerchandisesArgs {
  input: OutgoingMerchandisePageInput;
}

export interface QueryPartnershipArgs {
  code: Scalars["Int"];
}

export interface QueryPartnershipsArgs {
  input: PartnershipPageArgs;
}

export interface QueryPaymentTransactionArgs {
  domainTransactionId: Scalars["String"];
}

export interface QueryPaymentTransactionsArgs {
  input: PaymentTransactionPageInput;
}

export interface QueryPointArgs {
  memberCode: Scalars["Int"];
}

export interface QueryPossibleDatesArgs {
  input: PossibleDatesArgs;
}

export interface QueryPossibleTimesArgs {
  input: PossibleTimesArgs;
}

export interface QueryPreSignedUrlForBrandArgs {
  input: PreSignedUrlBrandInput;
}

export interface QueryPreSignedUrlForLanguageCourseHasRequiredDocumentTemplateFileArgs {
  input: PreSignedUrlForLanguageCourseHasRequiredDocumentTemplateFileArgs;
}

export interface QueryPreSignedUrlForLanguageCourseMainImageArgs {
  input: PreSignedUrlForLanguageCourseMainImageArgs;
}

export interface QueryPreSignedUrlForLanguageCourseRegistrationRequiredDocumentArgs {
  input: PreSignedUrlForLanguageCourseRegistrationRequiredDocumentArgs;
}

export interface QueryPreSignedUrlForMerchandiseArgs {
  input: PreSignedUrlForMerchandiseInput;
}

export interface QueryPreSignedUrlForProxyShopArgs {
  input: PreSignedUrlProxyShopInput;
}

export interface QueryPreSignedUrlForProxyShopReviewArgs {
  input: PreSignedUrlProxyShopInput;
}

export interface QueryPreSignedUrlForRequestMerchandiseArgs {
  input: PreSignedUrlForRequestMerchandiseQuoteInput;
}

export interface QueryPreSignedUrlForUploadArgs {
  input: PreSignedUrlArgs;
}

export interface QueryProxyShopArgs {
  id: Scalars["ID"];
}

export interface QueryProxyShopBrandsArgs {
  input: BrandListArgs;
}

export interface QueryProxyShopEventArgs {
  id: Scalars["ID"];
}

export interface QueryProxyShopEventsArgs {
  input: ProxyShopEventPageArgs;
}

export interface QueryProxyShopMiddleCategoriesArgs {
  input: MiddleCategoryListArg;
}

export interface QueryProxyShopReviewArgs {
  id: Scalars["ID"];
}

export interface QueryProxyShopReviewsArgs {
  input: ProxyShopReviewPageInput;
}

export interface QueryProxyShopsArgs {
  input: ProxyShopPageInput;
}

export interface QueryProxyTagArgs {
  id: Scalars["ID"];
}

export interface QueryProxyTagsArgs {
  input: ProxyTagPageInput;
}

export interface QueryRecommendedBlogsArgs {
  input: RecommendedBlogsArgs;
}

export interface QueryRecommendedProxyShopsArgs {
  input: RecommendedProxyShopInput;
}

export interface QueryRecommendedRelatedProxyShopsArgs {
  input: RecommendedRelatedProxyShopInput;
}

export interface QueryRecommendedSpotsArgs {
  input: RecommendedSpotsArgs;
}

export interface QueryRequestMerchandiseQuoteArgs {
  id: Scalars["ID"];
}

export interface QueryRequestMerchandiseQuoteExcelDownloadUrlArgs {
  input: RequestMerchandiseQuotePageInput;
}

export interface QueryRequestMerchandiseQuotesArgs {
  input: RequestMerchandiseQuotePageInput;
}

export interface QueryRequiredInfoArgs {
  code: Scalars["Int"];
}

export interface QueryRequiredInfosArgs {
  input: RequiredInfoPageArgs;
}

export interface QueryReservationArgs {
  code: Scalars["Int"];
}

export interface QueryReservationExcelDownloadUrlArgs {
  input: ReservationPageArgs;
}

export interface QueryReservationForNonUserArgs {
  input: ReservationForNonUserArgs;
}

export interface QueryReservationsArgs {
  input: ReservationPageArgs;
}

export interface QuerySameNameProxyShopsArgs {
  input: SameNameProxyShopInput;
}

export interface QuerySearchBlogNewArgs {
  input: SearchBlogArgs;
}

export interface QuerySearchBlogWithFederationArgs {
  input: SearchBlogArgs;
}

export interface QuerySearchProxyShopArgs {
  input: SearchProxyShopArgs;
}

export interface QuerySearchProxyShopWithFederationArgs {
  input: SearchProxyShopArgs;
}

export interface QuerySearchSpotNewArgs {
  input: SearchSpotArgs;
}

export interface QuerySearchSpotWithFederationArgs {
  input: SearchSpotArgs;
}

export interface QuerySearchSuggestionsArgs {
  input: SearchSuggestArgs;
}

export interface QueryShippingAddressArgs {
  id: Scalars["ID"];
}

export interface QueryShippingAddressesArgs {
  proxyShopIds?: InputMaybe<Array<Scalars["ID"]>>;
}

export interface QueryShippingPoliciesArgs {
  input: ShippingPolicyPageInput;
}

export interface QueryShippingPolicyArgs {
  id: Scalars["ID"];
}

export interface QueryShippingSiteArgs {
  id: Scalars["ID"];
}

export interface QueryShippingSitesArgs {
  input: ShippingSitePageInput;
}

export interface QuerySignedUpSocialTypesByEmailArgs {
  email: Scalars["String"];
}

export interface QuerySpotArgs {
  code: Scalars["Int"];
}

export interface QuerySpotEventArgs {
  code: Scalars["Int"];
}

export interface QuerySpotEventsArgs {
  input: SpotEventPageArgs;
}

export interface QuerySpotReviewsArgs {
  input: SpotReviewPageArgs;
}

export interface QuerySpotsArgs {
  input: SpotPageArgs;
}

export interface QueryTipArgs {
  code: Scalars["Int"];
}

export interface QueryTipsArgs {
  input: TipPageArgs;
}

export interface QueryTripHashtagsArgs {
  input: TripHashtagPageArgs;
}

export interface QueryVoucherArgs {
  code: Scalars["Int"];
}

export interface QueryVoucherTemplateArgs {
  code: Scalars["Int"];
}

export interface QueryVoucherTemplatesArgs {
  input: VoucherTemplatePageArgs;
}

export interface QueryVouchersArgs {
  input: VoucherPageArgs;
}

export interface QueryWarehouseArgs {
  id: Scalars["ID"];
}

export interface QueryWarehousesArgs {
  input: WarehousePageInput;
}

export interface QueryWatchTogetherBlogsArgs {
  input: WatchTogetherBlogsArgs;
}

export interface QueryWatchTogetherSpotsArgs {
  input: WatchTogetherSpotsArgs;
}

export interface Rates {
  __typename?: "Rates";
  CNY: Scalars["Float"];
  HKD: Scalars["Float"];
  JPY: Scalars["Float"];
  KRW: Scalars["Float"];
  THB: Scalars["Float"];
  TWD: Scalars["Float"];
  USD: Scalars["Float"];
  VND: Scalars["Float"];
}

export interface ReceiveMovedMerchandisesInput {
  outgoingMerchandiseId: Scalars["ID"];
}

export interface RecommendedBlogsArgs {
  categoryCodes?: InputMaybe<Array<Scalars["Int"]>>;
  cityCategoryCode?: InputMaybe<Scalars["Int"]>;
  /** ?????? ???????????? ????????? ?????? */
  currentBlogCode?: InputMaybe<Scalars["Int"]>;
  /** ????????? ????????? ?????? (ex. ?????? ???????????? ????????? ??????) */
  excludeBlogCodes?: InputMaybe<Array<Scalars["Int"]>>;
  language: LanguageType;
  /** default: 20 */
  limitSize?: InputMaybe<Scalars["Int"]>;
  /** default: 5, max: 20 */
  size?: InputMaybe<Scalars["Int"]>;
  types?: InputMaybe<Array<BlogType>>;
}

export interface RecommendedProxyShopInput {
  brandId?: InputMaybe<Scalars["ID"]>;
  categoryId?: InputMaybe<Scalars["ID"]>;
  currentProxyShopId?: InputMaybe<Scalars["ID"]>;
  language: LanguageType;
  /** default 20 */
  limit?: InputMaybe<Scalars["Int"]>;
}

export interface RecommendedRelatedProxyShopInput {
  currentProxyShopId: Scalars["ID"];
  /** default 10 */
  limit?: InputMaybe<Scalars["Int"]>;
  /** default ???????????? */
  period?: InputMaybe<PeriodInput>;
}

export interface RecommendedSpotsArgs {
  categoryCodes?: InputMaybe<Array<Scalars["Int"]>>;
  cityCategoryCode?: InputMaybe<Scalars["Int"]>;
  /** ?????? ???????????? ?????? ?????? */
  currentSpotCode?: InputMaybe<Scalars["Int"]>;
  /** ????????? ?????? ?????? (ex. ?????? ???????????? ?????? ??????) */
  excludeSpotCodes?: InputMaybe<Array<Scalars["Int"]>>;
  language: LanguageType;
  /** default: 20 */
  limitSize?: InputMaybe<Scalars["Int"]>;
  /** default: 5, max: 20 */
  size?: InputMaybe<Scalars["Int"]>;
  spotType?: InputMaybe<Array<ReservationType>>;
}

export interface RefundInfo {
  __typename?: "RefundInfo";
  amount: Scalars["Float"];
  date: Scalars["Date"];
  id: Scalars["String"];
}

export interface RefundReservationArgs {
  amount: Scalars["Float"];
  reservationCode: Scalars["Int"];
}

export interface RefundReservationForNonUserArgs {
  reservationCode: Scalars["String"];
}

export interface RegisterFcmTokenInfoArgs {
  fcmToken: Scalars["String"];
  /** ????????? ?????? ?????? ??? */
  language: LanguageType;
  /** user device id */
  udid: Scalars["String"];
}

export interface Remark {
  __typename?: "Remark";
  code: Scalars["Int"];
  translations: Array<RemarkTrans>;
}

export interface RemarkTranslationsArgs {
  language?: InputMaybe<LanguageType>;
}

export interface RemarkTrans {
  __typename?: "RemarkTrans";
  language: LanguageType;
  name: Scalars["String"];
  remarkCode: Scalars["Int"];
}

export interface RemoveBlogFromSpotArgs {
  blogCode: Scalars["Int"];
  spotCode: Scalars["Int"];
}

export interface RemoveCurrencyExchangePriceArgs {
  currency: Scalars["String"];
  exchangeCode: Scalars["Int"];
}

export interface RemoveFileToLanguageCourseRegistrationRequiredDocumentArgs {
  /** File.id */
  fileId: Scalars["ID"];
  /** LanguageCourseRegistration.id */
  registrationId: Scalars["ID"];
  /** LanguageCourseRegistrationRequiredDocument.id */
  registrationRequiredDocumentId: Scalars["ID"];
}

export interface RemoveHashtagFromLanguageCourseTranslationArgs {
  name: Scalars["String"];
  /** LanguageCourseTranslation.id */
  translationId: Scalars["ID"];
}

export interface RemoveIgnoredPushMessageTypeArgs {
  types: Array<NotificationMessageType>;
  /** user device id */
  udid: Scalars["String"];
}

export interface RemovePercentRefundPolicyArgs {
  percentRefundPolicyIndex: Scalars["Int"];
  reservationPolicyCode: Scalars["Int"];
}

export interface RemoveProxyShopFromAdvertisementArgs {
  advertisementCode: Scalars["Int"];
  language: LanguageType;
}

export interface RemoveRemarkFromReservationPolicyArgs {
  remarkCode: Scalars["Int"];
  reservationPolicyCode: Scalars["Int"];
}

export interface RemoveRequiredInfoToReservationPolicyArgs {
  requiredInfoCode: Scalars["Int"];
  reservationPolicyCode: Scalars["Int"];
}

export interface RemoveSpotFromContractArgs {
  contractCode: Scalars["Int"];
  spotCode: Scalars["Int"];
}

export interface RemoveSpotFromCouponArgs {
  couponCode: Scalars["Int"];
  spotCode: Scalars["Int"];
}

export interface RemoveSpotFromVoucherTemplateArgs {
  spotCode: Scalars["Int"];
  voucherTemplateCode: Scalars["Int"];
}

export interface RemoveTagFromAdvertisementArgs {
  advertisementCode: Scalars["Int"];
  tagCode: Scalars["Int"];
}

export interface RemoveTagToLanguageCourseTranslationInput {
  /** LanguageCourseTag.id */
  tagId: Scalars["ID"];
  /** LanguageCourseTranslation.id */
  translationId: Scalars["ID"];
}

export interface RemoveTripHashtagFromBlogTransArgs {
  blogTransCode: Scalars["Int"];
  hashtagCode: Scalars["Int"];
}

export interface RemoveTripHashtagFromSpotTransArgs {
  hashtagCode: Scalars["Int"];
  spotTransCode: Scalars["Int"];
}

export interface RemoveTypeFromBlogArgs {
  blogCode: Scalars["Int"];
  type: BlogType;
}

export interface RequestMerchandiseQuote {
  __typename?: "RequestMerchandiseQuote";
  /** YYYY-MM-DD HH:mm:ss */
  createdAt: Scalars["Date"];
  description?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  language: LanguageType;
  manager?: Maybe<Member>;
  managerId?: Maybe<Scalars["ID"]>;
  proxyShop: ProxyShop;
  proxyShopId: Scalars["ID"];
  requestUser: Member;
  requestUserId: Scalars["ID"];
  requestedMerchandises: Array<RequestedMerchandise>;
  sentAt?: Maybe<Scalars["Date"]>;
  status: RequestMerchandiseQuoteStatusType;
  /** YYYY-MM-DD HH:mm:ss */
  updatedAt: Scalars["Date"];
  userCountry: CountryType;
  userEmail: Scalars["String"];
  userName: Scalars["String"];
  userPhone: Scalars["String"];
  userSNS: Scalars["String"];
}

export interface RequestMerchandiseQuoteCreateInput {
  language: LanguageType;
  requestedMerchandiseCreateInputs: Array<RequestedMerchandiseCreateInput>;
  userCountry: CountryType;
  userEmail: Scalars["String"];
  userName: Scalars["String"];
  userPhone: Scalars["String"];
  userSNS: Scalars["String"];
}

export interface RequestMerchandiseQuoteFilter {
  createdAt?: InputMaybe<PeriodInput>;
  id?: InputMaybe<Scalars["ID"]>;
  search?: InputMaybe<Scalars["String"]>;
  status?: InputMaybe<RequestMerchandiseQuoteStatusType>;
}

export interface RequestMerchandiseQuoteOrder {
  direction: OrderByDirectionType;
  field: RequestMerchandiseQuoteOrderType;
}

export type RequestMerchandiseQuoteOrderType = "createdAt";

export interface RequestMerchandiseQuotePage {
  __typename?: "RequestMerchandiseQuotePage";
  edges: Array<RequestMerchandiseQuote>;
  totalCount: Scalars["Int"];
}

export interface RequestMerchandiseQuotePageInput {
  filter?: InputMaybe<RequestMerchandiseQuoteFilter>;
  limit: Scalars["Int"];
  order?: InputMaybe<RequestMerchandiseQuoteOrder>;
  page: Scalars["Int"];
}

export type RequestMerchandiseQuoteStatusType =
  | "CANCELED"
  | "COMPLETED"
  | "UNPROCESSED";

export interface RequestMerchandiseQuoteUpdateInput {
  description?: InputMaybe<Scalars["String"]>;
  id: Scalars["ID"];
}

export interface RequestResetPasswordArgs {
  email: Scalars["String"];
  language: LanguageType;
  /** ??? ?????? (ex. https://www.creatrip.com) */
  webHost: Scalars["String"];
}

export interface RequestedMerchandise {
  __typename?: "RequestedMerchandise";
  /** YYYY-MM-DD HH:mm:ss */
  createdAt: Scalars["Date"];
  id: Scalars["ID"];
  images: Array<RequestedMerchandiseImage>;
  merchandiseName: Scalars["String"];
  merchandiseOption: Scalars["String"];
  quantity: Scalars["Int"];
  relatedUrl: Scalars["String"];
  requestMerchandiseQuoteId: Scalars["ID"];
  /** YYYY-MM-DD HH:mm:ss */
  updatedAt: Scalars["Date"];
}

export interface RequestedMerchandiseCreateInput {
  images: Array<RequestedMerchandiseImageCreateInput>;
  merchandiseName: Scalars["String"];
  merchandiseOption: Scalars["String"];
  quantity: Scalars["Int"];
  relatedUrl: Scalars["String"];
}

export interface RequestedMerchandiseImage {
  __typename?: "RequestedMerchandiseImage";
  /** YYYY-MM-DD HH:mm:ss */
  createdAt: Scalars["Date"];
  id: Scalars["ID"];
  imageUrl: Scalars["String"];
  requestedMerchandiseId: Scalars["ID"];
  /** YYYY-MM-DD HH:mm:ss */
  updatedAt: Scalars["Date"];
}

export interface RequestedMerchandiseImageCreateInput {
  imageUrl: Scalars["URL"];
}

export interface RequiredInfo {
  __typename?: "RequiredInfo";
  code: Scalars["Int"];
  /** YYYY-MM-DD HH:mm:ss */
  createdAt: Scalars["Date"];
  id: Scalars["ID"];
  imageUrl?: Maybe<Scalars["URL"]>;
  isDefault: Scalars["Boolean"];
  isFix: Scalars["Boolean"];
  option?: Maybe<Array<Scalars["String"]>>;
  translations?: Maybe<Array<RequiredInfoTrans>>;
  type: RequiredInfoType;
  /** YYYY-MM-DD HH:mm:ss */
  updatedAt: Scalars["Date"];
}

export interface RequiredInfoTranslationsArgs {
  languages?: InputMaybe<Array<LanguageType>>;
}

export interface RequiredInfoFilter {
  isDefault?: InputMaybe<Scalars["Boolean"]>;
  isFix?: InputMaybe<Scalars["Boolean"]>;
  search?: InputMaybe<Scalars["String"]>;
}

export interface RequiredInfoOrder {
  direction?: InputMaybe<OrderByDirectionType>;
  field: BaseOrderType;
}

export interface RequiredInfoPage {
  __typename?: "RequiredInfoPage";
  edges: Array<RequiredInfo>;
  totalCount: Scalars["Int"];
}

export interface RequiredInfoPageArgs {
  filter?: InputMaybe<RequiredInfoFilter>;
  limit: Scalars["Int"];
  order?: InputMaybe<RequiredInfoOrder>;
  page: Scalars["Int"];
}

export type RequiredInfoStatusType = "FIX";

export interface RequiredInfoTrans {
  __typename?: "RequiredInfoTrans";
  code: Scalars["Int"];
  /** YYYY-MM-DD HH:mm:ss */
  createdAt: Scalars["Date"];
  description?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  language: LanguageType;
  name: Scalars["String"];
  requiredInfoCode: Scalars["Int"];
  /** YYYY-MM-DD HH:mm:ss */
  updatedAt: Scalars["Date"];
}

export type RequiredInfoType =
  | "ADDRESS"
  | "DATE"
  | "EMAIL"
  | "IMAGE"
  | "LIST"
  | "PHONE"
  | "TEXT";

export interface Reservation {
  __typename?: "Reservation";
  /** ?????? ?????? ?????? (??? ?????? - ????????? ????????? - ????????????) */
  actualPaymentAmount?: Maybe<Scalars["Float"]>;
  code: Scalars["Int"];
  /** @deprecated countryType?????? ?????? */
  country?: Maybe<Scalars["String"]>;
  countryType?: Maybe<CountryType>;
  /** YYYY-MM-DD HH:mm:ss */
  createdAt: Scalars["Date"];
  currencyTimestamp?: Maybe<Scalars["String"]>;
  deliveryFee?: Maybe<Scalars["Float"]>;
  discountAmount?: Maybe<Scalars["Float"]>;
  email: Scalars["String"];
  /** ?????? ?????? ?????? ????????? */
  expirationDate?: Maybe<Scalars["Date"]>;
  id: Scalars["ID"];
  infos?: Maybe<Array<ReservationInfo>>;
  isPaymentReady: Scalars["Boolean"];
  isReviewed: Scalars["Boolean"];
  /** ?????? ?????? ????????? ???????????? ?????? (?????? ?????? ????????? actualPaymentAmount) */
  koreanActualPaymentAmount?: Maybe<Scalars["Int"]>;
  language: LanguageType;
  localizedDeliveryFee?: Maybe<Scalars["Float"]>;
  localizedDiscountAmount?: Maybe<Scalars["Float"]>;
  localizedOriginalAmount?: Maybe<Scalars["Float"]>;
  localizedRefundAmount?: Maybe<Scalars["Float"]>;
  /** ?????? ?????? ?????? */
  localizedRefundableAmount: Scalars["Float"];
  member?: Maybe<Member>;
  memberCode?: Maybe<Scalars["Int"]>;
  name: Scalars["String"];
  originalAmount?: Maybe<Scalars["Float"]>;
  password?: Maybe<Scalars["String"]>;
  paymentCurrency: CurrencyType;
  paymentInfo?: Maybe<PaymentInfo>;
  /** YYYY-MM-DD HH:mm:ss */
  paymentLimitDate?: Maybe<Scalars["Date"]>;
  paymentType?: Maybe<PaymentType>;
  paymentUrl?: Maybe<Scalars["String"]>;
  platform?: Maybe<Scalars["String"]>;
  precaution?: Maybe<Scalars["String"]>;
  refundAmount?: Maybe<Scalars["Float"]>;
  refundInfo?: Maybe<RefundInfo>;
  /** @deprecated refundAmount??? ?????? */
  refundPaymentAmount: Scalars["Float"];
  reservationCode: Scalars["String"];
  /** YYYY-MM-DD HH:mm:ss */
  reservationDate?: Maybe<Scalars["Date"]>;
  reservedItems: Array<ReservedItem>;
  restoredPoint: Scalars["Float"];
  social: Scalars["String"];
  spot: Spot;
  spotCode: Scalars["Int"];
  status: ReservationStatusType;
  telephone?: Maybe<Scalars["String"]>;
  totalOrderQuantity?: Maybe<Scalars["Int"]>;
  /** @deprecated discountAmount??? ?????? */
  totalPaymentAmount?: Maybe<Scalars["Float"]>;
  /** YYYY-MM-DD HH:mm:ss */
  updatedAt: Scalars["Date"];
  usableVoucherTemplates: Array<VoucherTemplate>;
  /** @deprecated ?????? ??? ?????? */
  used?: Maybe<Scalars["Boolean"]>;
  usedPoint: Scalars["Float"];
  voucherCode?: Maybe<Scalars["String"]>;
  vouchers?: Maybe<Array<Voucher>>;
}

export interface ReservationFilter {
  createdAt?: InputMaybe<PeriodArgs>;
  paymentDate?: InputMaybe<PeriodArgs>;
  reservationDate?: InputMaybe<PeriodArgs>;
  search?: InputMaybe<Scalars["String"]>;
  spotCodes?: InputMaybe<Array<Scalars["Int"]>>;
  status?: InputMaybe<ReservationStatusType>;
}

export interface ReservationForNonUserArgs {
  reservationCode: Scalars["String"];
}

export interface ReservationInfo {
  __typename?: "ReservationInfo";
  code: Scalars["Float"];
  koreanName?: Maybe<Scalars["String"]>;
  localName?: Maybe<Scalars["String"]>;
  type?: Maybe<RequiredInfoType>;
  value: Scalars["String"];
}

export interface ReservationInfoCreateInput {
  code: Scalars["Int"];
  koName?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  value: Scalars["String"];
}

export interface ReservationOrder {
  direction?: InputMaybe<OrderByDirectionType>;
  field: ReservationOrderType;
}

export type ReservationOrderType =
  | "CREATED_AT"
  | "PAYMENT_DATE"
  | "RESERVATION_DATE";

export interface ReservationPage {
  __typename?: "ReservationPage";
  edges: Array<Reservation>;
  totalCount: Scalars["Int"];
}

export interface ReservationPageArgs {
  filter?: InputMaybe<ReservationFilter>;
  limit: Scalars["Int"];
  order?: InputMaybe<ReservationOrder>;
  page: Scalars["Int"];
}

export interface ReservationPolicy {
  __typename?: "ReservationPolicy";
  /** ??? ??? ????????? ?????? ???????????? */
  availableDaysAfterNow?: Maybe<Scalars["Float"]>;
  code: Scalars["Int"];
  /** YYYY-MM-DD HH:mm:ss */
  createdAt: Scalars["Date"];
  deliveryFee?: Maybe<Scalars["Int"]>;
  duration: Scalars["Int"];
  id: Scalars["ID"];
  isConfirmRequired: Scalars["Boolean"];
  isDateRequired: Scalars["Boolean"];
  isPaymentRequired: Scalars["Boolean"];
  isTimeRequired: Scalars["Boolean"];
  localizedDeliveryFee?: Maybe<Scalars["Float"]>;
  localizedMinOrderAmount?: Maybe<Scalars["Float"]>;
  maxOrderCount: Scalars["Int"];
  minOrderAmount?: Maybe<Scalars["Int"]>;
  /** @deprecated ????????? */
  minOrderCount: Scalars["Int"];
  noticeEmail?: Maybe<Scalars["String"]>;
  outsideUrl?: Maybe<Scalars["String"]>;
  paymentTimeOutSecond?: Maybe<Scalars["Int"]>;
  refundPolicies: Array<PercentRefundPolicy>;
  remarkList: Array<Scalars["Int"]>;
  requiredInfos?: Maybe<Array<RequiredInfo>>;
  reservableTimes: Array<BusinessHour>;
  specialReservableTimes?: Maybe<Array<SpecialReservableTime>>;
  spotCode: Scalars["Int"];
  type: ReservationType;
  /** ??? ??? ????????? ?????? ?????? ????????? */
  unableDaysBeforeNow?: Maybe<Scalars["Float"]>;
  /** YYYY-MM-DD HH:mm:ss */
  updatedAt: Scalars["Date"];
}

export interface ReservationPolicyLocalizedDeliveryFeeArgs {
  input: LocalizedPriceArgs;
}

export interface ReservationPolicyLocalizedMinOrderAmountArgs {
  input: LocalizedPriceArgs;
}

export type ReservationPolicyStatusType =
  | "CONFIRM_REQUIRED"
  | "DATE_REQUIRED"
  | "PAYMENT_REQUIRED"
  | "TIME_REQUIRED";

export interface ReservationReviewCreateArgs {
  /** ?????? ?????? */
  content: Scalars["String"];
  /** ?????? ????????? ????????? ??? ????????????. */
  images?: InputMaybe<Array<SpotReviewImageCreateArgs>>;
  language: LanguageType;
  /** ????????? ?????????, ??????????????? code */
  parentCode?: InputMaybe<Scalars["Int"]>;
  /** pk */
  reservationCode: Scalars["Int"];
  spotCode: Scalars["Int"];
  starRating: Scalars["Int"];
}

export type ReservationStatusType =
  | "CANCEL"
  | "COMPLETE"
  | "CONFIRM_REQUIRED"
  | "PARTIAL_REFUND"
  | "PAYMENT_REQUIRED"
  | "USED";

export type ReservationType =
  | "COUPON"
  | "GENERAL"
  | "MEMBER"
  | "PROXY_SHOPPING"
  | "URL";

export interface ReservedItem {
  __typename?: "ReservedItem";
  code: Scalars["Int"];
  /** YYYY-MM-DD HH:mm:ss */
  createdAt: Scalars["Date"];
  /** ?????? ?????? (??????) */
  discountPrice?: Maybe<Scalars["Float"]>;
  fee?: Maybe<Scalars["Float"]>;
  id: Scalars["ID"];
  koreanName?: Maybe<Scalars["String"]>;
  localName?: Maybe<Scalars["String"]>;
  /** ?????? ?????? (????????????) */
  localizedDiscountPrice?: Maybe<Scalars["Float"]>;
  /** ?????? ??? ?????? (????????????) */
  localizedOriginalPrice?: Maybe<Scalars["Float"]>;
  /** ?????? (?????? ??? ??????) */
  originalPrice?: Maybe<Scalars["Float"]>;
  quantity?: Maybe<Scalars["Int"]>;
  reservationCode: Scalars["Int"];
  /** @deprecated discountPrice??? ?????? */
  salePrice?: Maybe<Scalars["Float"]>;
  /** ????????? (??????) */
  settlementPrice?: Maybe<Scalars["Float"]>;
  showName?: Maybe<Scalars["String"]>;
  /** YYYY-MM-DD HH:mm:ss */
  updatedAt: Scalars["Date"];
}

export interface ReservedItemCreateInput {
  koreanName?: InputMaybe<Scalars["String"]>;
  localName?: InputMaybe<Scalars["String"]>;
  quantity: Scalars["Int"];
  showName?: InputMaybe<Scalars["String"]>;
  spotItemCode: Scalars["Int"];
}

export interface ResetOrderShippingInput {
  orderShippingId: Scalars["ID"];
  orderedMerchandiseIds: Array<Scalars["ID"]>;
}

export interface ResetPasswordArgs {
  emailAuthCode: Scalars["String"];
  password: Scalars["String"];
}

export type ReviewDomainType =
  | "BLOG_REVIEW"
  | "PROXY_SHOP_REVIEW"
  | "SPOT_REVIEW";

export interface SameNameProxyShopInput {
  koTitle: Scalars["String"];
  language: LanguageType;
}

export interface SearchBlogArgs {
  filter: SearchBlogFilter;
  limit: Scalars["Int"];
  order?: InputMaybe<SearchBlogOrder>;
  page: Scalars["Int"];
}

export interface SearchBlogFilter {
  categoryCodes?: InputMaybe<Array<Scalars["Int"]>>;
  /** default: 200, max: 1000 */
  excerptLength?: InputMaybe<Scalars["Int"]>;
  /** ?????? ??? ?????? */
  isDefault?: InputMaybe<Scalars["Boolean"]>;
  /** ?????? ??? ?????? */
  isMain?: InputMaybe<Scalars["Boolean"]>;
  /** ?????? ??? ?????? */
  isRecommend?: InputMaybe<Scalars["Boolean"]>;
  /** mandatory */
  language: LanguageType;
  search?: InputMaybe<Scalars["String"]>;
  types?: InputMaybe<Array<BlogType>>;
}

export interface SearchBlogOrder {
  direction: OrderByDirectionType;
  field: SearchBlogOrderFieldType;
}

export type SearchBlogOrderFieldType =
  | "CREATED_AT"
  | "LIKE_COUNT"
  | "RENEWAL_DATE";

export type SearchCharacterType =
  | "A"
  | "B"
  | "C"
  | "D"
  | "E"
  | "ETC"
  | "F"
  | "G"
  | "H"
  | "I"
  | "J"
  | "K"
  | "L"
  | "M"
  | "N"
  | "O"
  | "P"
  | "Q"
  | "R"
  | "S"
  | "T"
  | "U"
  | "V"
  | "W"
  | "X"
  | "Y"
  | "Z";

export interface SearchProxyShopArgs {
  filter: SearchProxyShopFilter;
  limit: Scalars["Int"];
  order?: InputMaybe<SearchProxyShopOrder>;
  page: Scalars["Int"];
}

export interface SearchProxyShopFilter {
  currency: CurrencyType;
  /** mandatory */
  language: LanguageType;
  search?: InputMaybe<Scalars["String"]>;
}

export interface SearchProxyShopOrder {
  direction: OrderByDirectionType;
  field: SearchProxyShopOrderFieldType;
}

export type SearchProxyShopOrderFieldType = "CREATED_AT" | "LIKE_COUNT";

export interface SearchSpotArgs {
  filter: SearchSpotFilter;
  limit: Scalars["Int"];
  order?: InputMaybe<SearchSpotOrder>;
  page: Scalars["Int"];
}

export interface SearchSpotFilter {
  categoryCodes?: InputMaybe<Array<Scalars["Int"]>>;
  currency: CurrencyType;
  geoBoundingBox?: InputMaybe<GeoBoundingBox>;
  isRecommend?: InputMaybe<Scalars["Boolean"]>;
  isReservable?: InputMaybe<Scalars["Boolean"]>;
  language: LanguageType;
  search?: InputMaybe<Scalars["String"]>;
  types?: InputMaybe<Array<ReservationType>>;
}

export interface SearchSpotOrder {
  direction: OrderByDirectionType;
  field: SearchSpotOrderFieldType;
}

export type SearchSpotOrderFieldType =
  | "CREATED_AT"
  | "LIKE_COUNT"
  | "RENEWAL_DATE";

export interface SearchSuggestArgs {
  key: Scalars["String"];
  language: LanguageType;
  types?: InputMaybe<Array<SearchSuggestType>>;
}

export type SearchSuggestType =
  | "PROXY_HASH_TAG"
  | "PROXY_SHOP"
  | "PROXY_TAG"
  | "SPOT"
  | "TRIP_CATEGORY"
  | "TRIP_HASHTAG";

export interface SearchedBlog {
  __typename?: "SearchedBlog";
  createdAt: Scalars["Date"];
  excerpt: Scalars["String"];
  id: Scalars["ID"];
  isLiked: Scalars["Boolean"];
  mainCategory?: Maybe<Scalars["String"]>;
  mainImageUrl?: Maybe<Scalars["String"]>;
  renewalDate: Scalars["Date"];
  subCategory?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
  updatedAt: Scalars["Date"];
  viewCount: Scalars["Float"];
}

export interface SearchedBlogPage {
  __typename?: "SearchedBlogPage";
  edges: Array<SearchedBlog>;
  totalCount: Scalars["Int"];
}

export interface SearchedProxyShop {
  __typename?: "SearchedProxyShop";
  brand?: Maybe<Scalars["String"]>;
  createdAt: Scalars["Date"];
  currentEventMainString?: Maybe<Scalars["String"]>;
  currentEventType?: Maybe<ProxyShopEventType>;
  id: Scalars["ID"];
  isDisplayDiscount: Scalars["Boolean"];
  isLiked: Scalars["Boolean"];
  isRocket: Scalars["Boolean"];
  localizedDiscountPrice: Scalars["Float"];
  localizedOriginalPrice: Scalars["Float"];
  mainImageUrl?: Maybe<Scalars["String"]>;
  name: Scalars["String"];
  updatedAt: Scalars["Date"];
  viewCount: Scalars["Float"];
}

export interface SearchedProxyShopPage {
  __typename?: "SearchedProxyShopPage";
  edges: Array<SearchedProxyShop>;
  totalCount: Scalars["Int"];
}

export interface SearchedSpot {
  __typename?: "SearchedSpot";
  cityCategory?: Maybe<Scalars["String"]>;
  createdAt: Scalars["Date"];
  currentEventType?: Maybe<SpotEventType>;
  id: Scalars["ID"];
  isLiked: Scalars["Boolean"];
  isReservable: Scalars["Boolean"];
  latitude?: Maybe<Scalars["Float"]>;
  localizedDiscountPrice: Scalars["Float"];
  localizedOriginalPrice: Scalars["Float"];
  locationCategory?: Maybe<Scalars["String"]>;
  longitude?: Maybe<Scalars["Float"]>;
  mainImageUrl?: Maybe<Scalars["String"]>;
  name: Scalars["String"];
  renewalDate: Scalars["Date"];
  subTitle?: Maybe<Scalars["String"]>;
  updatedAt: Scalars["Date"];
  viewCount: Scalars["Float"];
}

export interface SearchedSpotPage {
  __typename?: "SearchedSpotPage";
  edges: Array<SearchedSpot>;
  totalCount: Scalars["Int"];
}

export interface SelectSpotItemArgs {
  isReservable?: InputMaybe<Scalars["Boolean"]>;
  isRoot?: InputMaybe<Scalars["Boolean"]>;
}

export interface SendSupportMailArgs {
  content: Scalars["String"];
  email: Scalars["String"];
  extraInfo?: InputMaybe<Scalars["String"]>;
  name: Scalars["String"];
}

export interface SendTestNotificationArgs {
  language?: InputMaybe<LanguageType>;
  message: Scalars["String"];
  messageType: NotificationMessageType;
  relationId: Scalars["Int"];
  title: Scalars["String"];
}

export interface SetBlogTransToTipArgs {
  blogTransCode: Scalars["Int"];
  tipCode: Scalars["Int"];
}

export interface SetBrandImageInput {
  brandId: Scalars["ID"];
  imageUrl: Scalars["URL"];
}

export interface SetCityCategoryToLanguageCourseArgs {
  cityCategoryId: Scalars["ID"];
  /** LanguageCourse.id */
  courseId: Scalars["ID"];
}

export interface SetDetailLocationCategoryToLanguageCourseArgs {
  /** LanguageCourse.id */
  courseId: Scalars["ID"];
  detailLocationCategoryId: Scalars["ID"];
}

export interface SetFaqActiveStatusArgs {
  id: Scalars["ID"];
  status: Scalars["Boolean"];
}

export interface SetGroupToLanguageCourseRequiredInfoArgs {
  /** LanguageCourseRequiredInfoGroup.id */
  groupId: Scalars["ID"];
  /** LanguageCourseRequiredInfo.id */
  id: Scalars["ID"];
}

export interface SetImageToCouponArgs {
  code: Scalars["Int"];
  url: Scalars["URL"];
}

/** ???????????? ????????? API */
export interface SetLanguageCourseIsFemaleCollegeStatus {
  /** LanguageCourse.id */
  id: Scalars["ID"];
  /** isFemaleCollegeStatus */
  status: Scalars["Boolean"];
}

export interface SetLanguageCourseLikeStatusArgs {
  /** LanguageCourse.id */
  id: Scalars["ID"];
  status: Scalars["Boolean"];
}

export interface SetLanguageCoursePublishStatusArgs {
  id: Scalars["ID"];
  status: Scalars["Boolean"];
}

export interface SetLanguageCourseRequiredInfoRequiredStatusInput {
  /** LanguageCourseRequiredInfo.id */
  id: Scalars["ID"];
  /** ??? ????????? ??????????????? */
  isRequired: Scalars["Boolean"];
}

export interface SetMainImageToBlogTransArgs {
  code: Scalars["Int"];
  mainImageUrl: Scalars["URL"];
}

export interface SetMainImageToLanguageCourseArgs {
  /** LanguageCourse.id */
  courseId: Scalars["ID"];
  mainImageUrl: Scalars["ImageUrl"];
}

export interface SetMainLinkedMerchandiseInput {
  proxyShopId: Scalars["ID"];
  targetLinkedMerchandiseId: Scalars["ID"];
}

export interface SetMainProxyShopImageInput {
  proxyShopId: Scalars["ID"];
  targetProxyShopImageId: Scalars["ID"];
}

export interface SetMainSpotImageArgs {
  imageCode: Scalars["Int"];
  spotCode: Scalars["Int"];
}

export interface SetMainSpotItemArgs {
  itemCode: Scalars["Int"];
  spotCode: Scalars["Int"];
}

export interface SetMainSpotItemImageArgs {
  imageCode: Scalars["Int"];
  spotItemCode: Scalars["Int"];
}

export interface SetManagerToCouponArgs {
  code: Scalars["Int"];
  managerCode: Scalars["Int"];
}

export interface SetManagerToLanguageCourseTranslationArgs {
  managerId: Scalars["ID"];
  /** LanguageCourseTranslation.id */
  translationId: Scalars["ID"];
}

export interface SetManagerToPartnershipArgs {
  managerCode: Scalars["Int"];
  partnershipCode: Scalars["Int"];
}

export interface SetManagerToTipArgs {
  managerCode: Scalars["Int"];
  tipCode: Scalars["Int"];
}

export interface SetOpeningHoursArgs {
  openingHours: Array<BusinessHourArgs>;
  spotCode: Scalars["Int"];
}

export interface SetPartnerToPartnershipArgs {
  partnerCode: Scalars["Int"];
  partnershipCode: Scalars["Int"];
}

export interface SetPartnershipToCouponArgs {
  couponCode: Scalars["Int"];
  partnershipCode: Scalars["Int"];
}

export interface SetPartnershipToLanguageCourseArgs {
  /** LanguageCourse.id */
  courseId: Scalars["ID"];
  partnershipId: Scalars["ID"];
}

export interface SetPrecautionToReservationArgs {
  precaution: Scalars["String"];
  reservationCode: Scalars["Int"];
}

export interface SetProxyShopRocketStatusInput {
  id: Scalars["ID"];
  isRocket: Scalars["Boolean"];
}

export interface SetPsdToCouponArgs {
  code: Scalars["Int"];
  url: Scalars["URL"];
}

export interface SetRequiredDocumentToLanguageCourseTranslationArgs {
  /** LanguageCourseRequiredDocument.id */
  documentId: Scalars["ID"];
  status: Scalars["Boolean"];
  /** LanguageCourseTranslation.id */
  translationId: Scalars["ID"];
}

export interface SetRequiredInfoToLanguageCourseTranslationArgs {
  infoId: Scalars["ID"];
  status: Scalars["Boolean"];
  /** LanguageCourseTranslation.id */
  translationId: Scalars["ID"];
}

export interface SetReservableTimesArgs {
  reservableTimes: Array<BusinessHourArgs>;
  reservationPolicyCode: Scalars["Int"];
}

export interface SetTipImageArgs {
  imageUrl: Scalars["URL"];
  tipCode: Scalars["Int"];
}

export interface SetVoucherTemplateManagerArgs {
  memberCode: Scalars["Int"];
  voucherTemplateCode: Scalars["Int"];
}

export interface SetWarehouseActiveStatusInput {
  id: Scalars["ID"];
  isActive: Scalars["Boolean"];
}

export type SettlementType =
  | "DEDUCT_FEE"
  | "DEPOSIT"
  | "FIXED_COST"
  | "NOT_SELECTED"
  | "NO_SETTLEMENT"
  | "PRE_PURCHASE"
  | "RECEIVE_FEE"
  | "SETTLEMENT";

export interface ShippingAddress {
  __typename?: "ShippingAddress";
  address: Scalars["String"];
  /** YYYY-MM-DD HH:mm:ss */
  createdAt: Scalars["Date"];
  detailAddress?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  memberId: Scalars["ID"];
  name: Scalars["String"];
  postalCode: Scalars["String"];
  shippingPolicy: ShippingPolicy;
  shippingPolicyId: Scalars["ID"];
  shippingSite?: Maybe<ShippingSite>;
  shippingSiteId?: Maybe<Scalars["ID"]>;
  /** YYYY-MM-DD HH:mm:ss */
  updatedAt: Scalars["Date"];
}

export interface ShippingAddressCreateInput {
  address: Scalars["String"];
  detailAddress?: InputMaybe<Scalars["String"]>;
  name: Scalars["String"];
  postalCode: Scalars["String"];
  shippingPolicyId: Scalars["ID"];
}

export interface ShippingInfoInput {
  shippingAddress: Scalars["String"];
  shippingOptionalInfo?: InputMaybe<Scalars["String"]>;
  shippingPolicyId: Scalars["ID"];
  shippingRequest?: InputMaybe<Scalars["String"]>;
  shippingZipcode: Scalars["String"];
}

export interface ShippingPolicy {
  __typename?: "ShippingPolicy";
  cnName: Scalars["String"];
  country: CountryType;
  /** YYYY-MM-DD HH:mm:ss */
  createdAt: Scalars["Date"];
  defaultWarehouse: Warehouse;
  defaultWarehouseId: Scalars["ID"];
  enName: Scalars["String"];
  hkName: Scalars["String"];
  id: Scalars["ID"];
  individualPolicies?: Maybe<Array<IndividualShippingPolicy>>;
  isActive: Scalars["Boolean"];
  jpName: Scalars["String"];
  koName: Scalars["String"];
  name: Scalars["String"];
  thName: Scalars["String"];
  twName: Scalars["String"];
  /** YYYY-MM-DD HH:mm:ss */
  updatedAt: Scalars["Date"];
  viName: Scalars["String"];
  writer: Member;
  writerId?: Maybe<Scalars["ID"]>;
}

export interface ShippingPolicyNameArgs {
  language: LanguageType;
}

export interface ShippingPolicyCreateInput {
  cnName: Scalars["String"];
  country: CountryType;
  enName: Scalars["String"];
  hkName: Scalars["String"];
  jpName: Scalars["String"];
  koName: Scalars["String"];
  thName: Scalars["String"];
  twName: Scalars["String"];
  viName: Scalars["String"];
  warehouseId: Scalars["ID"];
}

export interface ShippingPolicyFilter {
  country?: InputMaybe<CountryType>;
  isActive?: InputMaybe<Scalars["Boolean"]>;
  /** ?????? ?????? ???????????? ?????? ???????????? ?????? ??????????????? ????????? ??????????????? */
  proxyShopIds?: InputMaybe<Array<Scalars["ID"]>>;
  search?: InputMaybe<Scalars["String"]>;
}

export interface ShippingPolicyOrder {
  direction: OrderByDirectionType;
  field: ShippingPolicyOrderType;
}

export type ShippingPolicyOrderType = "createdAt";

export interface ShippingPolicyPage {
  __typename?: "ShippingPolicyPage";
  edges: Array<ShippingPolicy>;
  totalCount: Scalars["Int"];
}

export interface ShippingPolicyPageInput {
  filter?: InputMaybe<ShippingPolicyFilter>;
  limit: Scalars["Int"];
  order?: InputMaybe<ShippingPolicyOrder>;
  page: Scalars["Int"];
}

export interface ShippingPolicyUpdateInput {
  cnName?: InputMaybe<Scalars["String"]>;
  enName?: InputMaybe<Scalars["String"]>;
  hkName?: InputMaybe<Scalars["String"]>;
  id: Scalars["ID"];
  jpName?: InputMaybe<Scalars["String"]>;
  koName?: InputMaybe<Scalars["String"]>;
  thName?: InputMaybe<Scalars["String"]>;
  twName?: InputMaybe<Scalars["String"]>;
  viName?: InputMaybe<Scalars["String"]>;
}

export interface ShippingSite {
  __typename?: "ShippingSite";
  /** ?????? ????????? ????????? ?????? */
  code?: Maybe<Scalars["String"]>;
  /** YYYY-MM-DD HH:mm:ss */
  createdAt: Scalars["Date"];
  /** ???????????? */
  description?: Maybe<Scalars["String"]>;
  firstAddress: AddressOption;
  firstAddressId: Scalars["ID"];
  /** ?????? ????????? ?????? ????????? ?????? */
  fullAddress?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  /** ?????? ????????? ???????????? ?????? */
  name?: Maybe<Scalars["String"]>;
  /** ?????? ????????? ??????????????? ?????? */
  phone?: Maybe<Scalars["String"]>;
  secondAddress: AddressOption;
  secondAddressId: Scalars["ID"];
  shippingPolicy: ShippingPolicy;
  shippingPolicyId: Scalars["ID"];
  thirdAddress: AddressOption;
  thirdAddressId: Scalars["ID"];
  /** YYYY-MM-DD HH:mm:ss */
  updatedAt: Scalars["Date"];
}

export interface ShippingSiteCreateInput {
  code: Scalars["String"];
  description?: InputMaybe<Scalars["String"]>;
  firstAddressId: Scalars["ID"];
  fullAddress: Scalars["String"];
  name: Scalars["String"];
  phone: Scalars["String"];
  secondAddressId: Scalars["ID"];
  shippingPolicyId: Scalars["ID"];
  thirdAddressId: Scalars["ID"];
}

export interface ShippingSiteFilter {
  firstAddressId?: InputMaybe<Scalars["ID"]>;
  search?: InputMaybe<Scalars["String"]>;
  secondAddressId?: InputMaybe<Scalars["ID"]>;
  shippingPolicyId?: InputMaybe<Scalars["ID"]>;
  thirdAddressId?: InputMaybe<Scalars["ID"]>;
}

export interface ShippingSiteOrder {
  direction: OrderByDirectionType;
  field: ShippingSiteOrderType;
}

export type ShippingSiteOrderType = "createdAt";

export interface ShippingSitePage {
  __typename?: "ShippingSitePage";
  edges: Array<ShippingSite>;
  totalCount: Scalars["Int"];
}

export interface ShippingSitePageInput {
  filter?: InputMaybe<ShippingSiteFilter>;
  limit: Scalars["Int"];
  order?: InputMaybe<ShippingSiteOrder>;
  page: Scalars["Int"];
}

export interface ShippingSiteUpdateInput {
  code?: InputMaybe<Scalars["String"]>;
  description?: InputMaybe<Scalars["String"]>;
  firstAddressId?: InputMaybe<Scalars["ID"]>;
  fullAddress?: InputMaybe<Scalars["String"]>;
  id: Scalars["ID"];
  name?: InputMaybe<Scalars["String"]>;
  phone?: InputMaybe<Scalars["String"]>;
  secondAddressId?: InputMaybe<Scalars["ID"]>;
  thirdAddressId?: InputMaybe<Scalars["ID"]>;
}

export interface SignInArgs {
  id: Scalars["String"];
  password: Scalars["String"];
}

export interface SignInResult {
  __typename?: "SignInResult";
  accessToken: Scalars["String"];
  /**
   * ?????? ????????? ??????????????? ?????? ???????????? ???????????? ???????????? ???.
   * true: ?????? API??? ?????? ????????? ?????????.
   * false: ?????? ????????? ?????????.
   * ?????? true??? ??????, ?????? ???????????? ????????? ????????? ????????? ???????????? ?????? ????????? ????????? ???????????????
   */
  isCreated: Scalars["Boolean"];
}

export interface SignUpArgs {
  countryCode?: InputMaybe<Scalars["String"]>;
  countryType?: InputMaybe<CountryType>;
  email: Scalars["String"];
  id?: InputMaybe<Scalars["String"]>;
  language: LanguageType;
  name: Scalars["String"];
  nickname: Scalars["String"];
  password: Scalars["String"];
}

export interface SocialInfo {
  __typename?: "SocialInfo";
  code: Scalars["Int"];
  /** YYYY-MM-DD HH:mm:ss */
  createdAt: Scalars["Date"];
  email?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  memberCode: Scalars["Int"];
  /** @deprecated Use profileUrl */
  picture?: Maybe<Scalars["String"]>;
  socialId: Scalars["String"];
  type: SocialType;
  /** YYYY-MM-DD HH:mm:ss */
  updatedAt: Scalars["Date"];
}

export interface SocialInfoArgs {
  /** Creatrip ????????? ????????? ???????????? ?????? ???????????? jwt, ??? ?????? ????????? ???????????? ?????? ???????????? token */
  token: Scalars["String"];
  type: SocialType;
}

export type SocialType = "APPLE" | "CREATRIP" | "FACEBOOK" | "GOOGLE" | "LINE";

export interface SpecialReservableTime {
  __typename?: "SpecialReservableTime";
  code: Scalars["Int"];
  /** YYYY-MM-DD HH:mm:ss */
  createdAt: Scalars["Date"];
  id: Scalars["ID"];
  period: Period;
  reservableTimes: Array<BusinessHour>;
  reservationPolicyCode: Scalars["Int"];
  /** YYYY-MM-DD HH:mm:ss */
  updatedAt: Scalars["Date"];
}

export interface SpecialReservableTimeArgs {
  period: PeriodArgs;
  reservableTimes: Array<BusinessHourArgs>;
}

export interface SplitOrderShippingInput {
  orderId: Scalars["ID"];
  /** ?????? ?????? ?????? ??? ?????? IDs */
  orderedMerchandiseIds: Array<Scalars["ID"]>;
  /** ????????? ?????? ??? ?????? ?????? ID */
  sourceOrderShippingId: Scalars["ID"];
  /** ?????? ????????? ??? ?????? ID */
  warehouseId: Scalars["ID"];
}

export interface Spot {
  __typename?: "Spot";
  address: Scalars["String"];
  blogs?: Maybe<Array<Blog>>;
  categories?: Maybe<Array<Category>>;
  code: Scalars["Int"];
  contracts?: Maybe<Array<Contract>>;
  coupons?: Maybe<Array<Coupon>>;
  couponsForAdmin: Array<Coupon>;
  couponsForUser: Array<Coupon>;
  /** YYYY-MM-DD HH:mm:ss */
  createdAt: Scalars["Date"];
  currentEvent?: Maybe<SpotEvent>;
  discountPrice: Scalars["Int"];
  eventCode?: Maybe<Scalars["Int"]>;
  eventType?: Maybe<SpotEventType>;
  id: Scalars["ID"];
  images?: Maybe<Array<Image>>;
  isLiked?: Maybe<Scalars["Boolean"]>;
  isReservable: Scalars["Boolean"];
  items?: Maybe<Array<SpotItem>>;
  latitude?: Maybe<Scalars["Float"]>;
  likeCount: Scalars["Int"];
  localizedDiscountPrice: Scalars["Float"];
  localizedOriginalPrice?: Maybe<Scalars["Float"]>;
  longitude?: Maybe<Scalars["Float"]>;
  mainImageUrl?: Maybe<Scalars["String"]>;
  openingHours?: Maybe<Array<BusinessHour>>;
  originalPrice?: Maybe<Scalars["Int"]>;
  partnership?: Maybe<Partnership>;
  partnershipCode?: Maybe<Scalars["Float"]>;
  register?: Maybe<Member>;
  reservationPolicy?: Maybe<ReservationPolicy>;
  reviewRatingAverage?: Maybe<Scalars["Float"]>;
  reviews: SpotReviewPage;
  salePrice: Scalars["Int"];
  score: Scalars["Float"];
  shareCount: Scalars["Int"];
  telephone: Scalars["String"];
  translations?: Maybe<Array<SpotTrans>>;
  /** YYYY-MM-DD HH:mm:ss */
  updatedAt: Scalars["Date"];
  viewCount: Scalars["Int"];
  voucherTemplates?: Maybe<Array<VoucherTemplate>>;
}

export interface SpotBlogsArgs {
  language?: InputMaybe<LanguageType>;
}

export interface SpotCategoriesArgs {
  types?: InputMaybe<Array<CategoryType>>;
}

export interface SpotImagesArgs {
  isMain?: InputMaybe<Scalars["Boolean"]>;
}

export interface SpotItemsArgs {
  input?: InputMaybe<SelectSpotItemArgs>;
}

export interface SpotLocalizedDiscountPriceArgs {
  input: LocalizedPriceArgs;
}

export interface SpotLocalizedOriginalPriceArgs {
  input: LocalizedPriceArgs;
}

export interface SpotReviewsArgs {
  input: SpotReviewPageArgs;
}

export interface SpotTranslationsArgs {
  language?: InputMaybe<LanguageType>;
}

export interface SpotEvent {
  __typename?: "SpotEvent";
  /** ?????? ????????? ?????? ?????? */
  baseValue?: Maybe<Scalars["Int"]>;
  code: Scalars["Int"];
  /** YYYY-MM-DD HH:mm:ss */
  createdAt: Scalars["Date"];
  description?: Maybe<Scalars["String"]>;
  /** YYYY-MM-DD HH:mm:ss */
  end: Scalars["Date"];
  id: Scalars["ID"];
  /** ?????? ????????? ?????? */
  individuals: Array<IndividualSpotEvent>;
  /** ????????? ????????? */
  manager: Member;
  spot: Spot;
  /** YYYY-MM-DD HH:mm:ss */
  start: Scalars["Date"];
  status: SpotEventStatusType;
  /** ?????? ????????? ?????? ?????? */
  subValue?: Maybe<Scalars["Int"]>;
  /** ????????? ?????? */
  type: SpotEventType;
  /** YYYY-MM-DD HH:mm:ss */
  updatedAt: Scalars["Date"];
}

export interface SpotEventFilter {
  period?: InputMaybe<PeriodArgs>;
  search?: InputMaybe<Scalars["String"]>;
  spotCode?: InputMaybe<Scalars["Int"]>;
  status?: InputMaybe<SpotEventStatusType>;
  type?: InputMaybe<SpotEventType>;
}

export interface SpotEventOrder {
  direction?: InputMaybe<OrderByDirectionType>;
  field: SpotEventOrderFieldType;
}

export type SpotEventOrderFieldType = "CREATED_AT";

export interface SpotEventPage {
  __typename?: "SpotEventPage";
  edges: Array<SpotEvent>;
  totalCount: Scalars["Int"];
}

export interface SpotEventPageArgs {
  filter?: InputMaybe<SpotEventFilter>;
  limit: Scalars["Int"];
  order?: InputMaybe<SpotEventOrder>;
  page: Scalars["Int"];
}

export type SpotEventStatusType = "CLOSED" | "ON_GOING" | "READY";

export type SpotEventType = "DISCOUNT" | "GET_FREE";

export interface SpotFilter {
  /** OR ???????????? ??????????????? */
  categories?: InputMaybe<Array<Scalars["Int"]>>;
  cityCategory?: InputMaybe<Scalars["Int"]>;
  isPublish?: InputMaybe<Scalars["Boolean"]>;
  isRecommend?: InputMaybe<Scalars["Boolean"]>;
  isReservable?: InputMaybe<Scalars["Boolean"]>;
  language: LanguageType;
  name?: InputMaybe<Scalars["String"]>;
  search?: InputMaybe<Scalars["String"]>;
  types?: InputMaybe<Array<ReservationType>>;
}

export interface SpotHasCoupon {
  __typename?: "SpotHasCoupon";
  code: Scalars["Int"];
  coupon: Coupon;
  couponCode: Scalars["Int"];
  /** YYYY-MM-DD HH:mm:ss */
  createdAt: Scalars["Date"];
  id: Scalars["ID"];
  spot: Spot;
  spotCode: Scalars["Int"];
  /** YYYY-MM-DD HH:mm:ss */
  updatedAt: Scalars["Date"];
}

export interface SpotHasVoucherTemplate {
  __typename?: "SpotHasVoucherTemplate";
  code: Scalars["Int"];
  /** YYYY-MM-DD HH:mm:ss */
  createdAt: Scalars["Date"];
  id: Scalars["ID"];
  spot: Spot;
  spotCode: Scalars["Int"];
  /** YYYY-MM-DD HH:mm:ss */
  updatedAt: Scalars["Date"];
  voucherTemplate: VoucherTemplate;
  voucherTemplateCode: Scalars["Int"];
}

export interface SpotItem {
  __typename?: "SpotItem";
  children?: Maybe<Array<SpotItem>>;
  code: Scalars["Int"];
  /** YYYY-MM-DD HH:mm:ss */
  createdAt: Scalars["Date"];
  discountPrice?: Maybe<Scalars["Int"]>;
  fee?: Maybe<Scalars["Float"]>;
  id: Scalars["ID"];
  images?: Maybe<Array<SpotItemImage>>;
  isMain: Scalars["Boolean"];
  isReservable: Scalars["Boolean"];
  localizedDiscountPrice?: Maybe<Scalars["Float"]>;
  localizedOriginalPrice?: Maybe<Scalars["Float"]>;
  originalPrice?: Maybe<Scalars["Float"]>;
  parentCode: Scalars["Int"];
  priority?: Maybe<Scalars["Int"]>;
  settlementPrice?: Maybe<Scalars["Float"]>;
  spot: Spot;
  spotCode: Scalars["Int"];
  translations: Array<SpotItemTrans>;
  /** YYYY-MM-DD HH:mm:ss */
  updatedAt: Scalars["Date"];
}

export interface SpotItemLocalizedDiscountPriceArgs {
  input: LocalizedPriceArgs;
}

export interface SpotItemLocalizedOriginalPriceArgs {
  input: LocalizedPriceArgs;
}

export interface SpotItemTranslationsArgs {
  language?: InputMaybe<LanguageType>;
}

export interface SpotItemImage {
  __typename?: "SpotItemImage";
  code: Scalars["Int"];
  /** YYYY-MM-DD HH:mm:ss */
  createdAt: Scalars["Date"];
  id: Scalars["ID"];
  isMain: Scalars["Boolean"];
  originPath: Scalars["String"];
  priority: Scalars["Int"];
  spotItemCode: Scalars["Int"];
  /** YYYY-MM-DD HH:mm:ss */
  updatedAt: Scalars["Date"];
  url: Scalars["String"];
}

export type SpotItemStatusType = "RESERVABLE";

export interface SpotItemTrans {
  __typename?: "SpotItemTrans";
  description?: Maybe<Scalars["String"]>;
  language: LanguageType;
  name?: Maybe<Scalars["String"]>;
  spotItemCode: Scalars["Int"];
}

export interface SpotMostViewedArgs {
  filter: SpotMostViewedFilter;
  limit: Scalars["Int"];
  order?: InputMaybe<ViewedCountOrder>;
  page: Scalars["Int"];
}

export interface SpotMostViewedFilter {
  categoryCodes?: InputMaybe<Array<Scalars["Int"]>>;
  cityCategoryCode?: InputMaybe<Scalars["Int"]>;
  language: LanguageType;
  period: PeriodArgs;
  size?: InputMaybe<Scalars["Int"]>;
  types?: InputMaybe<Array<ReservationType>>;
}

export interface SpotOrder {
  direction?: InputMaybe<OrderByDirectionType>;
  field: SpotOrderType;
}

export type SpotOrderType =
  | "CREATED_AT"
  | "DISCOUNT_PRICE"
  | "LIKE_COUNT"
  | "RENEWAL_DATE";

export interface SpotPage {
  __typename?: "SpotPage";
  edges: Array<Spot>;
  totalCount: Scalars["Int"];
}

export interface SpotPageArgs {
  filter: SpotFilter;
  limit: Scalars["Int"];
  order?: InputMaybe<SpotOrder>;
  page: Scalars["Int"];
}

export interface SpotReview {
  __typename?: "SpotReview";
  children?: Maybe<Array<SpotReview>>;
  code: Scalars["Int"];
  /** YYYY-MM-DD HH:mm:ss */
  createdAt: Scalars["Date"];
  id: Scalars["ID"];
  images?: Maybe<Array<SpotReviewImage>>;
  parentCode?: Maybe<Scalars["Float"]>;
  reservationCode?: Maybe<Scalars["Float"]>;
  spot: Spot;
  spotCode: Scalars["Float"];
  starRating: Scalars["Float"];
  translations?: Maybe<Array<SpotReviewTrans>>;
  /** YYYY-MM-DD HH:mm:ss */
  updatedAt: Scalars["Date"];
  writer: Member;
}

export interface SpotReviewChildrenArgs {
  order?: InputMaybe<SpotReviewOrder>;
}

export interface SpotReviewTranslationsArgs {
  language: LanguageType;
}

export interface SpotReviewCreateArgs {
  /** ?????? ?????? */
  content: Scalars["String"];
  /** ?????? ????????? ????????? ??? ????????????. */
  images?: InputMaybe<Array<SpotReviewImageCreateArgs>>;
  language: LanguageType;
  /** ????????? ?????????, ??????????????? code */
  parentCode?: InputMaybe<Scalars["Int"]>;
  spotCode: Scalars["Int"];
  starRating: Scalars["Int"];
}

export interface SpotReviewFilter {
  hasImage?: InputMaybe<Scalars["Boolean"]>;
  spotCode: Scalars["Int"];
}

export interface SpotReviewImage {
  __typename?: "SpotReviewImage";
  code: Scalars["Int"];
  /** YYYY-MM-DD HH:mm:ss */
  createdAt: Scalars["Date"];
  imageUrl: Scalars["URL"];
  spotReviewCode: Scalars["Int"];
  /** YYYY-MM-DD HH:mm:ss */
  updatedAt: Scalars["Date"];
}

export interface SpotReviewImageAddArgs {
  imageUrl: Scalars["URL"];
  spotReviewCode: Scalars["Int"];
}

export interface SpotReviewImageCreateArgs {
  imageUrl: Scalars["URL"];
}

export interface SpotReviewImageDeleteArgs {
  spotReviewCode: Scalars["Int"];
  spotReviewImageCode: Scalars["Int"];
}

export interface SpotReviewOrder {
  direction: OrderByDirectionType;
  field: SpotReviewOrderType;
}

export type SpotReviewOrderType = "CREATED_AT";

export interface SpotReviewPage {
  __typename?: "SpotReviewPage";
  edges: Array<SpotReview>;
  totalCount: Scalars["Int"];
}

export interface SpotReviewPageArgs {
  filter?: InputMaybe<SpotReviewFilter>;
  limit: Scalars["Int"];
  order?: InputMaybe<SpotReviewOrder>;
  page: Scalars["Int"];
}

export interface SpotReviewTrans {
  __typename?: "SpotReviewTrans";
  code: Scalars["Int"];
  content: Scalars["String"];
  /** YYYY-MM-DD HH:mm:ss */
  createdAt: Scalars["Date"];
  id: Scalars["ID"];
  isDefault: Scalars["Boolean"];
  language: LanguageType;
  spotReviewCode: Scalars["Float"];
  /** YYYY-MM-DD HH:mm:ss */
  updatedAt: Scalars["Date"];
}

export interface SpotReviewUpdateArgs {
  /** ?????? ?????? */
  content: Scalars["String"];
  language: LanguageType;
  reviewCode: Scalars["Int"];
  starRating?: InputMaybe<Scalars["Int"]>;
}

export type SpotStatusType = "RESERVABLE";

export interface SpotTrans {
  __typename?: "SpotTrans";
  code: Scalars["Int"];
  /** YYYY-MM-DD HH:mm:ss */
  createdAt: Scalars["Date"];
  hashtags?: Maybe<Array<TripHashtag>>;
  id: Scalars["ID"];
  isDefault: Scalars["Boolean"];
  isPublish: Scalars["Boolean"];
  isRecommend: Scalars["Boolean"];
  language: LanguageType;
  moreInformation?: Maybe<Scalars["String"]>;
  name: Scalars["String"];
  precautions?: Maybe<Scalars["String"]>;
  renewalDate: Scalars["Date"];
  searchTitle?: Maybe<Scalars["String"]>;
  spotCode: Scalars["Int"];
  subTitle?: Maybe<Scalars["String"]>;
  titlePricePolicy: Scalars["String"];
  /** YYYY-MM-DD HH:mm:ss */
  updatedAt: Scalars["Date"];
}

export interface SpotTransHasTripHashtag {
  __typename?: "SpotTransHasTripHashtag";
  code: Scalars["Int"];
  /** YYYY-MM-DD HH:mm:ss */
  createdAt: Scalars["Date"];
  hashtag: TripHashtag;
  hashtagCode: Scalars["Int"];
  id: Scalars["ID"];
  spotTrans: SpotTrans;
  spotTransCode: Scalars["Int"];
  /** YYYY-MM-DD HH:mm:ss */
  updatedAt: Scalars["Date"];
}

export type SpotTransStatusType = "DEFAULT" | "PUBLISH" | "RECOMMEND";

export interface Tag {
  __typename?: "Tag";
  children?: Maybe<Array<Tag>>;
  code: Scalars["Int"];
  /** YYYY-MM-DD HH:mm:ss */
  createdAt: Scalars["Date"];
  id: Scalars["ID"];
  isRecommend: Scalars["Boolean"];
  priority: Scalars["Int"];
  translations?: Maybe<Array<TagTrans>>;
  type: TagType;
  /** YYYY-MM-DD HH:mm:ss */
  updatedAt: Scalars["Date"];
}

export interface TagTrans {
  __typename?: "TagTrans";
  code: Scalars["Int"];
  /** YYYY-MM-DD HH:mm:ss */
  createdAt: Scalars["Date"];
  id: Scalars["ID"];
  language: LanguageType;
  name?: Maybe<Scalars["String"]>;
  tagCode: Scalars["Int"];
  /** YYYY-MM-DD HH:mm:ss */
  updatedAt: Scalars["Date"];
}

export type TagType =
  | "ARCHIVE"
  | "BLOG_CATEGORY"
  | "CITY"
  | "DETAIL_LOCATION"
  | "HASH_TAG"
  | "MAIN_GENERAL_CATEGORY"
  | "MAIN_PROXY_SHOPPING_CATEGORY"
  | "MAIN_RESERVATION_CATEGORY"
  | "MIDDLE_GENERAL_CATEGORY"
  | "MIDDLE_PROXY_SHOPPING_CATEGORY"
  | "MIDDLE_RESERVATION_CATEGORY";

export interface TimePeriod {
  __typename?: "TimePeriod";
  /** HH:mm:ss */
  end: Scalars["String"];
  /** array index */
  index?: Maybe<Scalars["Int"]>;
  /** HH:mm:ss */
  start: Scalars["String"];
}

export interface TimePeriodArgs {
  /** HH:mm */
  end: Scalars["String"];
  index?: InputMaybe<Scalars["Int"]>;
  /** HH:mm */
  start: Scalars["String"];
}

export interface Tip {
  __typename?: "Tip";
  blogTrans: BlogTrans;
  blogTransCode: Scalars["Int"];
  code: Scalars["Int"];
  /** YYYY-MM-DD HH:mm:ss */
  createdAt: Scalars["Date"];
  id: Scalars["ID"];
  imageUrl: Scalars["String"];
  isActive: Scalars["Boolean"];
  language: LanguageType;
  manager?: Maybe<Member>;
  managerCode?: Maybe<Scalars["Int"]>;
  priority: Scalars["Int"];
  title: Scalars["String"];
  /** YYYY-MM-DD HH:mm:ss */
  updatedAt: Scalars["Date"];
}

export interface TipFilter {
  isActive?: InputMaybe<Scalars["Boolean"]>;
  language: LanguageType;
  search?: InputMaybe<Scalars["String"]>;
}

export interface TipOrder {
  direction?: InputMaybe<OrderByDirectionType>;
  field?: InputMaybe<TipOrderFieldType>;
}

export type TipOrderFieldType = "CREATED_AT" | "PRIORITY" | "RANDOM";

export interface TipPage {
  __typename?: "TipPage";
  edges: Array<Tip>;
  totalCount: Scalars["Int"];
}

export interface TipPageArgs {
  filter: TipFilter;
  limit: Scalars["Int"];
  order?: InputMaybe<TipOrder>;
  page: Scalars["Int"];
}

export interface ToggleAdvertisementTransStatusArgs {
  advertisementCode: Scalars["Int"];
  language: LanguageType;
  statusType: AdvertisementTransStatusType;
}

export interface ToggleBlogTransStatusArgs {
  code: Scalars["Int"];
  statusType: BlogTransStatusType;
}

export interface ToggleContactStatusArgs {
  code: Scalars["Int"];
  statusType: ContractStatusType;
}

export interface ToggleExchangeStatusArgs {
  code: Scalars["Int"];
  statusType: ExchangeStatusType;
}

export interface TogglePartnershipStatusArgs {
  code: Scalars["Int"];
  statusType: PartnershipStatusType;
}

export interface ToggleRequiredInfoStatusArgs {
  code: Scalars["Int"];
  statusType: RequiredInfoStatusType;
}

export interface ToggleReservationPolicyStatusArgs {
  code: Scalars["Int"];
  statusType: ReservationPolicyStatusType;
}

export interface ToggleSpotItemStatusArgs {
  code: Scalars["Int"];
  statusType: SpotItemStatusType;
}

export interface ToggleSpotStatusArgs {
  code: Scalars["Int"];
  statusType: SpotStatusType;
}

export interface ToggleSpotTransStatusArgs {
  code: Scalars["Int"];
  statusType: SpotTransStatusType;
}

export interface TripHashtag {
  __typename?: "TripHashtag";
  blogTransHasHashtags: Array<BlogTransHasTripHashtag>;
  blogTranslations: Array<BlogTrans>;
  code: Scalars["Int"];
  /** YYYY-MM-DD HH:mm:ss */
  createdAt: Scalars["Date"];
  id: Scalars["ID"];
  isRecommend: Scalars["Boolean"];
  language: LanguageType;
  name: Scalars["String"];
  spotTransHasHashtags: Array<SpotTransHasTripHashtag>;
  spotTranslations: Array<SpotTrans>;
  /** YYYY-MM-DD HH:mm:ss */
  updatedAt: Scalars["Date"];
}

export interface TripHashtagFilter {
  isRecommend?: InputMaybe<Scalars["Boolean"]>;
  language: LanguageType;
  name?: InputMaybe<Scalars["String"]>;
}

export interface TripHashtagOrder {
  direction?: InputMaybe<OrderByDirectionType>;
  field: TripHashtagOrderField;
}

export type TripHashtagOrderField = "CREATED_AT";

export interface TripHashtagPage {
  __typename?: "TripHashtagPage";
  edges: Array<TripHashtag>;
  totalCount: Scalars["Int"];
}

export interface TripHashtagPageArgs {
  filter: TripHashtagFilter;
  limit: Scalars["Int"];
  order?: InputMaybe<TripHashtagOrder>;
  page: Scalars["Int"];
}

export interface UnlinkBannerAndBlogArgs {
  bannerCode: Scalars["Int"];
  blogCode: Scalars["Int"];
}

export interface UnlinkBannerAndProxyShopArgs {
  bannerCode: Scalars["Int"];
  proxyShopId: Scalars["ID"];
}

export interface UnlinkBannerAndSpotArgs {
  bannerCode: Scalars["Int"];
  spotCode: Scalars["Int"];
}

export interface UnlinkCategoryFromBlogArgs {
  blogCode: Scalars["Int"];
  categoryCode: Scalars["Int"];
}

export interface UnlinkCategoryFromSpotArgs {
  categoryCode: Scalars["Int"];
  spotCode: Scalars["Int"];
}

export interface UnlinkChildCategoryFromParentArgs {
  childCode: Scalars["Int"];
  parentCode: Scalars["Int"];
}

export interface UnlinkMerchandiseAndPartnerShipInput {
  contractId: Scalars["ID"];
  merchandiseId: Scalars["ID"];
  partnershipId: Scalars["ID"];
}

export interface UnlinkProxyShopAndBlogInput {
  blogId: Scalars["ID"];
  proxyShopId: Scalars["ID"];
}

export interface UnsetManagerFromPartnershipArgs {
  partnershipCode: Scalars["Int"];
}

export interface UnsetPartnerFromPartnershipArgs {
  partnershipCode: Scalars["Int"];
}

export interface UpdateAdvertisementArgs {
  advertiserName?: InputMaybe<Scalars["String"]>;
  code: Scalars["Int"];
  period?: InputMaybe<PeriodArgs>;
}

export interface UpdateAdvertisementTransArgs {
  advertisementCode: Scalars["Int"];
  description?: InputMaybe<Scalars["String"]>;
  language: LanguageType;
  linkUrl?: InputMaybe<Scalars["String"]>;
  optionalDescription?: InputMaybe<Scalars["String"]>;
  /** ?????? ?????? ?????? */
  priceDescription?: InputMaybe<Scalars["Int"]>;
  title?: InputMaybe<Scalars["String"]>;
}

export interface UpdateBannerArgs {
  advertiserName?: InputMaybe<Scalars["String"]>;
  bannerCode: Scalars["Int"];
  extraDescription?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  period?: InputMaybe<PeriodArgs>;
}

export interface UpdateCategoryArgs {
  categoryCode: Scalars["Int"];
  translations: Array<CategoryTransArgs>;
}

export interface UpdateCategoryPriorityArgs {
  sourcePriority: Scalars["Int"];
  targetPriority: Scalars["Int"];
  type: CategoryType;
}

export interface UpdateContractArgs {
  code: Scalars["Int"];
  /** YYYY-MM-DD */
  contractEndDate?: InputMaybe<Scalars["Date"]>;
  /** YYYY-MM-DD */
  contractStartDate?: InputMaybe<Scalars["Date"]>;
  contractType?: InputMaybe<ContractType>;
  /** default false */
  isAutomaticExtension?: InputMaybe<Scalars["Boolean"]>;
  /** default false */
  isSettlement?: InputMaybe<Scalars["Boolean"]>;
  /** list of day */
  settlementDates?: InputMaybe<Array<Scalars["Int"]>>;
  settlementType?: InputMaybe<SettlementType>;
  specialNote?: InputMaybe<Scalars["String"]>;
}

export interface UpdateCurrencyExchangePricesArgs {
  currencyExchangePrices: Array<CurrencyExchangePriceArgs>;
  exchangeCode: Scalars["Int"];
}

export interface UpdateDiscountIndividualProxyShopEventArgs {
  eventPrice: Scalars["Int"];
  individualProxyShopEventId: Scalars["ID"];
  proxyShopEventId: Scalars["ID"];
}

export interface UpdateDiscountIndividualSpotEventArgs {
  baseValue: Scalars["Int"];
  eventCode: Scalars["Int"];
  individualEventCode: Scalars["Int"];
}

export interface UpdateDiscountSpotEventArgs {
  code: Scalars["Float"];
  description?: InputMaybe<Scalars["String"]>;
  period?: InputMaybe<PeriodArgs>;
}

export interface UpdateExchangeWithTransArgs {
  address?: InputMaybe<Scalars["String"]>;
  code: Scalars["Int"];
  translations?: InputMaybe<Array<ExchangeTransInput>>;
}

export interface UpdateExpectedArrivalToOrderShippingInput {
  expectedArrival: Scalars["Date"];
  id: Scalars["ID"];
}

export interface UpdateFaqArgs {
  id: Scalars["ID"];
  mainCategoryId?: InputMaybe<Scalars["Int"]>;
  middleCategoryId?: InputMaybe<Scalars["Int"]>;
  translations?: InputMaybe<Array<FaqTransArgs>>;
}

export interface UpdateFaqPriorityArgs {
  middleCategoryId: Scalars["Int"];
  sourcePriority: Scalars["Int"];
  targetPriority: Scalars["Int"];
}

export interface UpdateGetFreeProxyShopEventArgs {
  description?: InputMaybe<Scalars["String"]>;
  getFree?: InputMaybe<GetFreeInput>;
  id: Scalars["ID"];
  limitCount?: InputMaybe<Scalars["Int"]>;
  period?: InputMaybe<PeriodInput>;
}

export interface UpdateGetFreeSpotEventArgs {
  baseValue?: InputMaybe<Scalars["Int"]>;
  code: Scalars["Float"];
  description?: InputMaybe<Scalars["String"]>;
  period?: InputMaybe<PeriodArgs>;
  subValue?: InputMaybe<Scalars["Int"]>;
}

export interface UpdateGiftIndividualProxyShopEventArgs {
  individualProxyShopEventId: Scalars["ID"];
  minimumOrderQuantity: Scalars["Int"];
  proxyShopEventId: Scalars["ID"];
}

export interface UpdateGiftProxyShopEventArgs {
  description?: InputMaybe<Scalars["String"]>;
  eventGift?: InputMaybe<EventGiftInput>;
  id: Scalars["ID"];
  limitCount?: InputMaybe<Scalars["Int"]>;
  period?: InputMaybe<PeriodInput>;
}

export interface UpdateLanguageCourseAddressInfoArgs {
  address?: InputMaybe<Scalars["String"]>;
  zipcode?: InputMaybe<Scalars["String"]>;
}

export interface UpdateLanguageCourseApplicationFeeArgs {
  isActive?: InputMaybe<Scalars["Boolean"]>;
  /** KRW */
  originalPrice?: InputMaybe<Scalars["Int"]>;
  /** KRW */
  sellPrice?: InputMaybe<Scalars["Int"]>;
}

export interface UpdateLanguageCourseArgs {
  /** ?????? ?????? */
  classType?: InputMaybe<LanguageCourseClassType>;
  /** ????????? ?????? */
  dormitoryInfo?: InputMaybe<UpdateLanguageCourseDormitoryInfoArgs>;
  /** LanguageCourse.id */
  id: Scalars["ID"];
  /** ?????? ?????? */
  instituteType?: InputMaybe<LanguageCourseInstituteType>;
}

export interface UpdateLanguageCourseClassFeeArgs {
  /** KRW */
  originalPrice?: InputMaybe<Scalars["Int"]>;
  /** KRW */
  sellPrice?: InputMaybe<Scalars["Int"]>;
}

export interface UpdateLanguageCourseDocumentTransArgs {
  description?: InputMaybe<Scalars["String"]>;
  id: Scalars["ID"];
  name?: InputMaybe<Scalars["String"]>;
}

export interface UpdateLanguageCourseDormitoryFeeArgs {
  /** LanguageCourseDormitoryFee.id */
  id: Scalars["ID"];
  isActive?: InputMaybe<Scalars["Boolean"]>;
  /** KRW */
  originalPrice?: InputMaybe<Scalars["Int"]>;
  /** KRW */
  sellPrice?: InputMaybe<Scalars["Int"]>;
}

export interface UpdateLanguageCourseDormitoryInfoArgs {
  /** ????????? ???????????? */
  homepage?: InputMaybe<Scalars["String"]>;
  /** ????????? ????????? ?????? */
  manager?: InputMaybe<UpdateLanguageCourseDormitoryManagerArgs>;
}

export interface UpdateLanguageCourseDormitoryManagerArgs {
  /** ????????? ????????? ????????? */
  email?: InputMaybe<Scalars["String"]>;
  /** ????????? ???????????? */
  name?: InputMaybe<Scalars["String"]>;
  /** ????????? ????????? ?????? */
  telephone?: InputMaybe<Scalars["String"]>;
}

export interface UpdateLanguageCourseDormitoryTranslationArgs {
  /** LanguageCourseDormitoryTranslation.id */
  id: Scalars["ID"];
  /** ????????? ?????? */
  name?: InputMaybe<Scalars["String"]>;
}

export interface UpdateLanguageCourseHasRequiredDocumentArgs {
  /** LanguageCourseHasRequiredDocument.id */
  courseHasRequiredDocumentId: Scalars["ID"];
  isOnlineAvailable: Scalars["Boolean"];
  /** LanguageCourseTranslation.id */
  translationId: Scalars["ID"];
}

export interface UpdateLanguageCoursePriceInfoArgs {
  applicationFee?: InputMaybe<UpdateLanguageCourseApplicationFeeArgs>;
  /** LanguageCourse.id */
  id: Scalars["ID"];
  semesters?: InputMaybe<Array<UpdateLanguageCourseSemesterPriceArgs>>;
}

export interface UpdateLanguageCourseRequiredDocumentArgs {
  id: Scalars["ID"];
  translations: Array<UpdateLanguageCourseDocumentTransArgs>;
}

export interface UpdateLanguageCourseRequiredInfoArgs {
  /** LanguageCourseRequiredInfo.id */
  id: Scalars["ID"];
  translations?: InputMaybe<Array<UpdateLanguageCourseRequiredInfoTransArgs>>;
  type?: InputMaybe<LanguageCourseRequiredInfoType>;
}

export interface UpdateLanguageCourseRequiredInfoGroupArgs {
  id: Scalars["ID"];
  layoutType?: InputMaybe<LanguageCourseRequiredInfoGroupLayoutType>;
  /** [??? ??????] ?????? ?????? ?????? */
  minimumTableRowCount?: InputMaybe<Scalars["Int"]>;
  translations?: InputMaybe<
    Array<UpdateLanguageCourseRequiredInfoGroupTransArgs>
  >;
  type?: InputMaybe<LanguageCourseRequiredInfoGroupType>;
}

export interface UpdateLanguageCourseRequiredInfoGroupPriorityArgs {
  /** LanguageCourseRequiredInfoGroup.id */
  id: Scalars["ID"];
  targetPriority: Scalars["Int"];
  type: LanguageCourseRequiredInfoGroupType;
}

export interface UpdateLanguageCourseRequiredInfoGroupTransArgs {
  id: Scalars["ID"];
  name?: InputMaybe<Scalars["String"]>;
}

export interface UpdateLanguageCourseRequiredInfoPriorityArgs {
  /** LanguageCourseRequiredInfoGroup.id */
  groupId: Scalars["ID"];
  /** LanguageCourseRequiredInfo */
  id: Scalars["ID"];
  targetPriority: Scalars["Int"];
}

export interface UpdateLanguageCourseRequiredInfoTransArgs {
  /** ?????? */
  description?: InputMaybe<Scalars["String"]>;
  id: Scalars["ID"];
  /** ???????????? ?????? ???????????? */
  name?: InputMaybe<Scalars["String"]>;
  options?: InputMaybe<Array<Scalars["String"]>>;
  /** ????????? ?????? ???????????????(?????????). ????????? ?????? ??? ?????? */
  placeholder?: InputMaybe<Scalars["String"]>;
  /** ?????????2. ????????????????????? ?????? */
  placeholder2?: InputMaybe<Scalars["String"]>;
}

export interface UpdateLanguageCourseSemesterArgs {
  coursePeriod?: InputMaybe<UpdatePeriodArgs>;
  id: Scalars["ID"];
  name?: InputMaybe<NameInput>;
  registrationPeriod?: InputMaybe<UpdatePeriodArgs>;
}

export interface UpdateLanguageCourseSemesterPriceArgs {
  classFee?: InputMaybe<UpdateLanguageCourseClassFeeArgs>;
  dormitoryFees?: InputMaybe<Array<UpdateLanguageCourseDormitoryFeeArgs>>;
  /** LanguageCourseSemester.id */
  id: Scalars["ID"];
}

export interface UpdateLanguageCourseTagInput {
  /** LanguageCourseTag.id */
  id: Scalars["ID"];
  translations: Array<UpdateLanguageCourseTagTranslationInput>;
}

export interface UpdateLanguageCourseTagTranslationInput {
  language: LanguageType;
  name: Scalars["String"];
}

export interface UpdateLanguageCourseTranslationArgs {
  addressInfo?: InputMaybe<UpdateLanguageCourseAddressInfoArgs>;
  courseInfo?: InputMaybe<Scalars["String"]>;
  courseManager?: InputMaybe<UpdateLanguageCourseTranslationManagerArgs>;
  homepage?: InputMaybe<Scalars["String"]>;
  /** LanguageCourseTranslation.id */
  id: Scalars["ID"];
  minimumRegisterCourseCount?: InputMaybe<Scalars["Int"]>;
  semesters?: InputMaybe<Array<UpdateLanguageCourseSemesterArgs>>;
  surroundingInfo?: InputMaybe<Scalars["String"]>;
}

export interface UpdateLanguageCourseTranslationManagerArgs {
  email?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  telephone?: InputMaybe<Scalars["String"]>;
}

export interface UpdateLanguageCourseTranslationNameArgs {
  /** LanguageCourseTranslation.id */
  id: Scalars["ID"];
  name: Scalars["String"];
}

export interface UpdateOnlineCouponArgs {
  code: Scalars["Int"];
  description?: InputMaybe<Scalars["String"]>;
  discountType?: InputMaybe<CouponDiscountType>;
  discountValue?: InputMaybe<Scalars["Int"]>;
  expiredAt?: InputMaybe<Scalars["Date"]>;
  name?: InputMaybe<Scalars["String"]>;
}

export interface UpdateOnsiteCouponArgs {
  code: Scalars["Int"];
  description?: InputMaybe<Scalars["String"]>;
  discountDescription?: InputMaybe<Scalars["String"]>;
  expiredAt?: InputMaybe<Scalars["Date"]>;
  name?: InputMaybe<Scalars["String"]>;
}

export interface UpdateOrderBusinessUserInfoInput {
  orderId: Scalars["ID"];
  userBusinessAddress: Scalars["String"];
  userBusinessName: Scalars["String"];
  userBusinessNumber: Scalars["String"];
}

export interface UpdatePartnerArgs {
  code: Scalars["Int"];
  email?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
}

export interface UpdatePartnershipArgs {
  accountHolder?: InputMaybe<Scalars["String"]>;
  address?: InputMaybe<Scalars["String"]>;
  bank?: InputMaybe<Scalars["String"]>;
  bankAccount?: InputMaybe<Scalars["String"]>;
  businessItem?: InputMaybe<Scalars["String"]>;
  businessRegistrationNumber?: InputMaybe<Scalars["String"]>;
  businessType?: InputMaybe<PartnershipBusinessType>;
  code: Scalars["Int"];
  companyName?: InputMaybe<Scalars["String"]>;
  email?: InputMaybe<Scalars["String"]>;
  partnerName?: InputMaybe<Scalars["String"]>;
  phone?: InputMaybe<Scalars["String"]>;
  representativeName?: InputMaybe<Scalars["String"]>;
  /** ?????? ?????? ????????? ????????? */
  settlementPartnerEmail?: InputMaybe<Scalars["String"]>;
  /** ?????? ?????? ????????? ?????? */
  settlementPartnerName?: InputMaybe<Scalars["String"]>;
  /** ?????? ?????? ????????? ????????? */
  settlementPartnerPhone?: InputMaybe<Scalars["String"]>;
  specialNote?: InputMaybe<Scalars["String"]>;
}

export interface UpdatePercentRefundPolicyArgs {
  percentRefundPolicy: PercentRefundPolicyArgs;
  percentRefundPolicyIndex: Scalars["Int"];
  reservationPolicyCode: Scalars["Int"];
}

export interface UpdatePeriodArgs {
  end?: InputMaybe<Scalars["Date"]>;
  start?: InputMaybe<Scalars["Date"]>;
}

export interface UpdateProxyShopEventArgs {
  description?: InputMaybe<Scalars["String"]>;
  id: Scalars["ID"];
  limitCount?: InputMaybe<Scalars["Int"]>;
  period?: InputMaybe<PeriodInput>;
}

export interface UpdateRequiredInfoTransArgs {
  description?: InputMaybe<Scalars["String"]>;
  language: LanguageType;
  name?: InputMaybe<Scalars["String"]>;
}

export interface UpdateRequiredInfoWithTransArgs {
  code: Scalars["Int"];
  option?: InputMaybe<Array<Scalars["String"]>>;
  translations?: InputMaybe<Array<UpdateRequiredInfoTransArgs>>;
  type?: InputMaybe<RequiredInfoType>;
}

export interface UpdateSpecialReservableTimeArgs {
  specialReservableTime: SpecialReservableTimeArgs;
  specialReservableTimeCode: Scalars["Int"];
}

export interface UpdateSpotArgs {
  address?: InputMaybe<Scalars["String"]>;
  code: Scalars["Int"];
  latitude?: InputMaybe<Scalars["Float"]>;
  longitude?: InputMaybe<Scalars["Float"]>;
  telephone?: InputMaybe<Scalars["String"]>;
}

export interface UpdateSpotImagePriorityArgs {
  imageCode: Scalars["Int"];
  spotCode: Scalars["Int"];
  targetPriority: Scalars["Int"];
}

export interface UpdateSpotItemArgs {
  code: Scalars["Int"];
  discountPrice?: InputMaybe<Scalars["Float"]>;
  fee?: InputMaybe<Scalars["Float"]>;
  originalPrice?: InputMaybe<Scalars["Float"]>;
  parentCode?: InputMaybe<Scalars["Int"]>;
  settlementPrice?: InputMaybe<Scalars["Float"]>;
}

export interface UpdateSpotItemImagePriorityArgs {
  imageCode: Scalars["Int"];
  spotItemCode: Scalars["Int"];
  targetPriority: Scalars["Int"];
}

export interface UpdateSpotItemPriorityArgs {
  itemCode: Scalars["Int"];
  spotCode: Scalars["Int"];
  targetParentCode: Scalars["Int"];
  targetPriority: Scalars["Int"];
}

export interface UpdateTipArgs {
  tipCode: Scalars["Int"];
  title: Scalars["String"];
}

export interface UpdateTipPriorityArgs {
  from: Scalars["Int"];
  language: LanguageType;
  to: Scalars["Int"];
}

export interface UpdateUserArgs {
  country?: InputMaybe<Scalars["String"]>;
  countryType?: InputMaybe<CountryType>;
  name?: InputMaybe<Scalars["String"]>;
  nickname?: InputMaybe<Scalars["String"]>;
}

export interface UpdateUserBlogArgs {
  blogCode: Scalars["Int"];
  cityCategoryCode?: InputMaybe<Scalars["Int"]>;
  content?: InputMaybe<Scalars["String"]>;
  mainImageUrl?: InputMaybe<Scalars["URL"]>;
  title?: InputMaybe<Scalars["String"]>;
}

export interface UpdateVoucherArgs {
  code: Scalars["Int"];
  description?: InputMaybe<Scalars["String"]>;
  expiredAt?: InputMaybe<Scalars["Date"]>;
}

export interface UpdateVoucherTemplateArgs {
  code: Scalars["Int"];
  name?: InputMaybe<Scalars["String"]>;
}

export interface UploadFileArgs {
  name: Scalars["String"];
  url: Scalars["ImageUrl"];
}

export interface UploadFileToLanguageCourseRegistrationRequiredDocumentArgs {
  /** LanguageCourseHasRequiredDocument.id */
  courseHasDocumentId: Scalars["ID"];
  file: UploadFileArgs;
  /** LanguageCourseRegistration.id */
  registrationId: Scalars["ID"];
}

export interface UploadImageToBannerArgs {
  bannerCode: Scalars["Int"];
  imageUrl: Scalars["URL"];
}

export interface UploadImageToRequiredInfoArgs {
  imageUrl: Scalars["URL"];
  requiredInfoCode: Scalars["Int"];
}

export interface UploadTemplateFileToLanguageCourseHasRequiredDocumentArgs {
  file: UploadFileArgs;
  /** LanguageCourseHasRequiredDocument.id */
  id: Scalars["ID"];
}

export interface UpsertBlogTransArgs {
  blogCode: Scalars["Int"];
  content?: InputMaybe<Scalars["String"]>;
  description?: InputMaybe<Scalars["String"]>;
  language: LanguageType;
  subtitle?: InputMaybe<Scalars["String"]>;
  title?: InputMaybe<Scalars["String"]>;
}

export interface UpsertLanguageCourseDormitoryTranslationInput {
  /** LanguageCourseDormitory.id */
  dormitoryId: Scalars["ID"];
  language: LanguageType;
  name: Scalars["String"];
}

export interface UpsertReservationPolicyArgs {
  availableDaysAfterNow?: InputMaybe<Scalars["Int"]>;
  deliveryFee?: InputMaybe<Scalars["Int"]>;
  duration?: InputMaybe<Scalars["Int"]>;
  maxOrderCount?: InputMaybe<Scalars["Int"]>;
  minOrderAmount?: InputMaybe<Scalars["Int"]>;
  minOrderCount?: InputMaybe<Scalars["Int"]>;
  noticeEmail?: InputMaybe<Scalars["String"]>;
  outsideUrl?: InputMaybe<Scalars["String"]>;
  paymentTimeOutSecond?: InputMaybe<Scalars["Int"]>;
  refundPolicyList?: InputMaybe<Scalars["String"]>;
  spotCode: Scalars["Int"];
  type?: InputMaybe<ReservationType>;
  unableDaysBeforeNow?: InputMaybe<Scalars["Int"]>;
}

export interface UpsertSpotItemTransArgs {
  description?: InputMaybe<Scalars["String"]>;
  language: LanguageType;
  name?: InputMaybe<Scalars["String"]>;
  spotItemCode: Scalars["Int"];
}

export interface UpsertSpotTransArgs {
  language: LanguageType;
  moreInformation?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  precautions?: InputMaybe<Scalars["String"]>;
  searchTitle?: InputMaybe<Scalars["String"]>;
  spotCode: Scalars["Int"];
  subTitle?: InputMaybe<Scalars["String"]>;
  titlePrice?: InputMaybe<Scalars["String"]>;
  titlePricePolicy?: InputMaybe<Scalars["String"]>;
}

export interface UseVoucherArgs {
  code: Scalars["Int"];
  description: Scalars["String"];
}

export type UserBlogStatusType =
  | "CONFIRMED"
  | "CONFIRM_REQUIRED"
  | "DECLINED"
  | "WRITING";

export interface ViewedCountOrder {
  direction: OrderByDirectionType;
  field: ViewedCountOrderType;
}

export type ViewedCountOrderType = "VIEWED_COUNT";

export interface Voucher {
  __typename?: "Voucher";
  code: Scalars["Int"];
  /** YYYY-MM-DD HH:mm:ss */
  createdAt: Scalars["Date"];
  description?: Maybe<Scalars["String"]>;
  expiredAt: Scalars["Date"];
  id: Scalars["ID"];
  isUsed: Scalars["Boolean"];
  pin?: Maybe<Scalars["String"]>;
  reservation?: Maybe<Reservation>;
  reservationCode?: Maybe<Scalars["Int"]>;
  type: VoucherType;
  /** YYYY-MM-DD HH:mm:ss */
  updatedAt: Scalars["Date"];
  url?: Maybe<Scalars["String"]>;
  usedAt?: Maybe<Scalars["Date"]>;
  voucherTemplate: VoucherTemplate;
  voucherTemplateCode: Scalars["Int"];
}

export interface VoucherFilter {
  isUsed?: InputMaybe<Scalars["Boolean"]>;
  voucherTemplateCode?: InputMaybe<Scalars["Float"]>;
}

export interface VoucherOrder {
  direction?: InputMaybe<OrderByDirectionType>;
  field: VoucherOrderType;
}

export type VoucherOrderType = "CREATED_AT" | "EXPIRED_AT";

export interface VoucherPage {
  __typename?: "VoucherPage";
  edges: Array<Voucher>;
  totalCount: Scalars["Int"];
}

export interface VoucherPageArgs {
  filter?: InputMaybe<VoucherFilter>;
  limit: Scalars["Int"];
  order?: InputMaybe<VoucherOrder>;
  page: Scalars["Int"];
}

export interface VoucherTemplate {
  __typename?: "VoucherTemplate";
  /** ????????? ??? ?????? ?????? ????????? */
  closestExpirationDate?: Maybe<Scalars["Date"]>;
  code: Scalars["Int"];
  /** YYYY-MM-DD HH:mm:ss */
  createdAt: Scalars["Date"];
  id: Scalars["ID"];
  /** ?????? ????????? ????????? ?????? */
  issuableVoucherQuantity: Scalars["Int"];
  manager: Member;
  managerCode: Scalars["Int"];
  name: Scalars["String"];
  partnership: Partnership;
  partnershipCode: Scalars["Int"];
  spots?: Maybe<Array<Spot>>;
  /** YYYY-MM-DD HH:mm:ss */
  updatedAt: Scalars["Date"];
  voucherQuantity: Scalars["Int"];
  vouchers?: Maybe<Array<Voucher>>;
}

export interface VoucherTemplateIssuableVoucherQuantityArgs {
  reservationCode?: InputMaybe<Scalars["Int"]>;
}

export interface VoucherTemplateFilter {
  search?: InputMaybe<Scalars["String"]>;
}

export interface VoucherTemplateOrder {
  direction?: InputMaybe<OrderByDirectionType>;
  field: VoucherTemplateOrderType;
}

export type VoucherTemplateOrderType = "CLOSEST_EXPIRATION_DATE" | "CREATED_AT";

export interface VoucherTemplatePage {
  __typename?: "VoucherTemplatePage";
  edges: Array<VoucherTemplate>;
  totalCount: Scalars["Int"];
}

export interface VoucherTemplatePageArgs {
  filter?: InputMaybe<VoucherTemplateFilter>;
  limit: Scalars["Int"];
  order?: InputMaybe<VoucherTemplateOrder>;
  page: Scalars["Int"];
}

export type VoucherType = "IMAGE" | "PIN";

export interface Warehouse {
  __typename?: "Warehouse";
  address: Scalars["String"];
  country: CountryType;
  /** YYYY-MM-DD HH:mm:ss */
  createdAt: Scalars["Date"];
  id: Scalars["ID"];
  incomingMerchandises?: Maybe<Array<IncomingMerchandise>>;
  isActive: Scalars["Boolean"];
  manager: Member;
  managerEmail: Scalars["String"];
  managerId: Scalars["ID"];
  managerPhoneNumber: Scalars["String"];
  name: Scalars["String"];
  outgoingMerchandises?: Maybe<Array<OutgoingMerchandise>>;
  /** YYYY-MM-DD HH:mm:ss */
  updatedAt: Scalars["Date"];
  zipcode: Scalars["String"];
}

export interface WarehouseCreateInput {
  address: Scalars["String"];
  country: CountryType;
  managerEmail: Scalars["String"];
  managerId: Scalars["ID"];
  managerPhoneNumber: Scalars["String"];
  name: Scalars["String"];
  zipcode: Scalars["String"];
}

export interface WarehouseFilter {
  country?: InputMaybe<CountryType>;
  isActive?: InputMaybe<Scalars["Boolean"]>;
  search?: InputMaybe<Scalars["String"]>;
}

export interface WarehouseOrder {
  direction: OrderByDirectionType;
  field: WarehouseOrderType;
}

export type WarehouseOrderType = "createdAt";

export interface WarehousePage {
  __typename?: "WarehousePage";
  edges: Array<Warehouse>;
  totalCount: Scalars["Int"];
}

export interface WarehousePageInput {
  filter?: InputMaybe<WarehouseFilter>;
  limit: Scalars["Int"];
  order?: InputMaybe<WarehouseOrder>;
  page: Scalars["Int"];
}

export interface WarehouseUpdateInput {
  address?: InputMaybe<Scalars["String"]>;
  id: Scalars["ID"];
  managerEmail?: InputMaybe<Scalars["String"]>;
  managerId?: InputMaybe<Scalars["ID"]>;
  managerPhoneNumber?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  zipcode?: InputMaybe<Scalars["String"]>;
}

export interface WatchTogetherBlogsArgs {
  blogCode: Scalars["Float"];
  language: LanguageType;
}

export interface WatchTogetherSpotsArgs {
  language: LanguageType;
  spotCode: Scalars["Float"];
}

export type SignInMutationVariables = Exact<{
  input: SignInArgs;
}>;

export type SignInMutation = {
  __typename?: "Mutation";
  signIn: { __typename?: "SignInResult"; accessToken: string };
};
