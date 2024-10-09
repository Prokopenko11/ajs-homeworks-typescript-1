import Movie from '../movie';
import Cart from '../cart';

test('testing byable interface', () => {
  const movie = new Movie(
    1762,
    'Мстители',
    2012,
    'США',
    'Avengers Assemble!',
    ['Фантастика', 'Боевик', 'Фэнтези', 'Приключения'],
    137
  );
  const cart = new Cart();
  cart.add(movie);
  expect(cart.items).toEqual([movie]);
})
