import moment from 'moment';

export default function transformPublishedAtTime(published: any) {
  return moment(published).fromNow();
}
