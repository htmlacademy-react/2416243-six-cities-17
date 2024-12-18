import {useNavigate} from 'react-router';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {changeSorting, closeSorting, openSorting} from '../../store/action.ts';
import {AppRoute, Sorts} from '../../const.ts';

export function PlacesSorting() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isOpened = useAppSelector((state) => state.isSortingOpen);
  const currentSortingType = useAppSelector((state) => state.sort);

  const handlePlaceSortingFormClick = () => {
    if (isOpened) {
      dispatch(closeSorting());
    } else {
      dispatch(openSorting());
    }
    navigate(AppRoute.Main);
  };

  const handlePlaceSortingChange = (sortingType: string) => {
    dispatch(changeSorting(sortingType));
    navigate(AppRoute.Main);
  };

  return (
    <form
      className="places__sorting"
      action="#"
      method="get"
      onClick={handlePlaceSortingFormClick}
      onMouseLeave={() => {
        dispatch(closeSorting());
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
