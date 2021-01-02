import Twit from '../../lib/twit'

export default (req, res) => {
  Twit.get(
    'search/tweets',
    { from: 'admkc', count: 10 },
    (err, data, response) => {
      if (err) {
        return res.status(400).json({ message: 'Oops, bir hata oldu' })
      }
      res.status(200).json(data)
    }
  )
}
