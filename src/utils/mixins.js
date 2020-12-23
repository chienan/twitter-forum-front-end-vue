import moment from 'moment'

export const fromNowFilter =
{
  filters: {
    fromNow(datatime) {
      if (!datatime) {
        return "-";
      }
      return moment(datatime).fromNow()
    },
  },
}