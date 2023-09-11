import { View, Text, Button, StyleSheet } from 'react-native';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { actions as counterAction } from '../features/counter/counterSlice';

export const HomeScreen = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  const increment = () => dispatch(counterAction.increment());
  const decrement = () => dispatch(counterAction.decrement());

  return (
    <View style={styles.container}>
      <Text>Counter: {count}</Text>
      <Button title="Increment" onPress={increment} />
      <Button title="Decrement" onPress={decrement} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
