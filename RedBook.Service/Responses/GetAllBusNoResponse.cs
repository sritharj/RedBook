using System.Collections.Generic;

namespace RedBook.Service.Responses
{
    public class GetAllBusNoResponse : BaseResponse
    {
        public List<BusDto> Buses { get; set; }

    }
}
