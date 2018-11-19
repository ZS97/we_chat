const KEY = "GOODS"

const getStorageGoods = () => {
  return wx.getStorageSync(KEY) || {}
}

/**
 * 添加商品
 * goods.goods_id = 129
 * goods.goods_number = 2
 */
const addGoods = goods => {
  // {129:2}
  const storageGoods = getStorageGoods()

  if (storageGoods[goods.goods_id]) {
    storageGoods[goods.goods_id] += goods.goods_number
  } else {
    storageGoods[goods.goods_id] = goods.goods_number
  }

  // 保存回去
  wx.setStorageSync(KEY, storageGoods)
}

/**
 * 更改商品
 * goods.goods_id = 129
 * goods.goods_number = 2
 */
const updateGoods = goods => {
  const storageGoods = getStorageGoods()

  // 更改为最新的数量
  storageGoods[goods.goods_id] = goods.goods_number

  // 保存回去
  wx.setStorageSync(KEY, storageGoods)
}

/**
 * 删除商品
 * goods_id 商品的id
 */
const deleteGoodsById = goods_id => {
  const storageGoods = getStorageGoods()

  delete storageGoods[goods_id]

  // 保存回去
  wx.setStorageSync(KEY, storageGoods)
}

export {addGoods,getStorageGoods,updateGoods,deleteGoodsById}
