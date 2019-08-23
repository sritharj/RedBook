using RedBook.Model;

namespace RedBook.Service
{
    public class BusDto
    {
        public BusDto(Bus data)
        {
            BusNo = data.BusNo;

        }

        public string BusNo { get; set; }
    }
}
