import {useNavigate} from 'react-router';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {AppRoute, Sorts} from '../../const.ts';
import {getCurrentSort} from '../../store/offers-slice/selectors.ts';
import {closeSort, openSort} from '../../store/sort-slice/sort-slice.ts';
import {changeSort} from '../../store/offers-slice/offers-slice.ts';
import {getSortOpenStatus} from '../../store/sort-slice/selectors.ts';

export function PlacesSorting() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isOpened = useAppSelector(getSortOpenStatus);
  const currentSortingType = useAppSelector(getCurrentSort);

  const handlePlaceSortingFormClick = () => {
    if (isOpened) {
      dispatch(closeSort());
    } else {
      dispatch(openSort());
    }
    navigate(AppRoute.Main);
  };

  const handlePlaceSortingChange = (sortingType: string) => {
    dispatch(changeSort(sortingType));
    navigate(AppRoute.Main);
  };

  return (
    <form
      className="places__sorting"
      action="#"
      method="get"
      onClick={handlePlaceSortingFormClick}
      onMouseLeave={() => {
        dispatch(closeSort());
      }}
    >
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
        {currentSortingType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isOpened ? 'places__options--opened' : ''}`}>
        {
          Object.values(Sorts).map((sortType) => (
            <li
              className={`places__option ${sortType === currentSortingType ? 'places__option--active' : ''}`}
              tabIndex={0}
              key={sortType}
              onClick={() => {
                handlePlaceSortingChange(sortType);
              }}
            >
              {sortType}
            </li>
          ))
        }
      </ul>
    </form>
  );
}
