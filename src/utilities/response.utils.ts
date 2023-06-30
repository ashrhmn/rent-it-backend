export const createPaginationMeta = ({
  total,
  page,
  limit,
}: {
  page: number;
  limit: number;
  total: number;
}) => ({
  currentPage: page,
  lastPage: !!limit ? Math.ceil(Math.max(total / limit, 1)) : 1,
  prevPage: page - 1 || null,
  nextPage: !!limit && page * limit < total ? page + 1 : null,
  total,
  from: Math.min(total, (page - 1) * limit + 1),
  to: Math.min(page * limit, total),
});

export const createPaginationMetaFromFindManyOption = (
  total: number,
  skip?: number,
  take?: number,
) => {
  if (skip === undefined || take === undefined)
    return {
      currentPage: 1,
      lastPage: 1,
      prevPage: null,
      nextPage: null,
      total,
      from: 0,
      to: total,
    };

  const page = Math.floor(skip / take) + 1;
  return createPaginationMeta({ page, limit: take, total });
};
