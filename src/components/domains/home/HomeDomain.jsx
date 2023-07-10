import React from 'react';
import ProductItems from '@src/components/atomics/organisms/ProductItems';
import { PRODUCT_ITEM_MOCK_LIST } from '@src/mocks/productMock';

export default function HomeDomain() {
  return (
    <section>
      <ProductItems
        isSwiper
        itemList={PRODUCT_ITEM_MOCK_LIST}
        title={'쇼핑몰 연습'}
      />
    </section>
  );
}
