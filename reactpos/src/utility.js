export function getProductById(products, productId) {
  return products.filter(function(product) {
    return product.productID === Number(productId)
  })[0] || {}
}

export function getProductByBarcode(products, productBarcode) {
  return products.filter(function(product) {
    return product.productBarCode === productBarcode
  })[0] || {}
}

export function getProductTotal(product) {
  return Math.round(Number(product.salePrice) * Number(product.quantity) * 100) / 100
}

export function getTotal(products) {
  let total = 0
  products.map(function(product) {
    total += getProductTotal(product)
    return null
  })
  return total
}