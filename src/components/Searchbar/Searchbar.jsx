import s from '../Searchbar/Searchbar.module.css';
export const Searchbar = onSubmit => {
  return (
    <header className={s.searchbar}>
      <form className={s.form}>
        <button type="submit" className={s.button}>
          <span className={s.buttonLabel}>Search</span>
        </button>

        <input
          className={s.input}
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
          onChange={onSubmit}
        />
      </form>
    </header>
  );
};
