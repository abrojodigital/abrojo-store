import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { formatCurrency } from '../../../utilities';

const styles = StyleSheet.create({
  page: {
    padding: 50,
    fontFamily: "Helvetica",
  },
  section: {
    margin: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
  item: {
    margin: 10,
    fontSize: 14,
  },
})

const MyDocument = ({ idPedido, order} ) => {
  return (
    <Document>
        <Page style={styles.page}>
          <View style={styles.section}>
            <Text>ID de pedido: {idPedido}</Text>
            <Text>Nombre: {order.buyer.name}</Text>
            <Text>Correo electrónico: {order.buyer.email}</Text>
            <Text>Teléfono: {order.buyer.phone}</Text>
            <Text>Dirección: {order.buyer.address}</Text>
          </View>
          <View>
            {order.items.map((cartItem) => (
              <Text key={cartItem.id} style={styles.item}>
                {cartItem.quantity} x {cartItem.title}: {formatCurrency(cartItem.price)}
              </Text>
            ))}
          </View>
          <View>
            <Text style={styles.section}>Total: {formatCurrency(order.total)}</Text>
          </View>
        </Page>
      </Document>
  )
}

export { MyDocument }