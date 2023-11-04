interface Movie {
  title: string;
  date: Date;
  rating: number;
  genre: string[];

  report(): string;
}
interface Detail {
  report(): string;
}

const currentMovie = {
  title: 'dune',
  date: new Date(2021, 9, 24),
  rating: 8.2,
  genre: ['action', 'adventure', 'drama'],

  report(): string {
    return `Title: ${this.title}`;
  },
};

const logMovie = (movie: Movie): void => {
  console.log(movie.report());
  console.log(`Date: ${movie.date}`);
  console.log(`Rating: ${movie.rating}`);
  console.log(`Genre: ${movie.genre.join(', ')}`);
};

const logDetail = (item: Detail): void => {
  console.log(item.report());
};

logMovie(currentMovie);

logDetail(currentMovie);
