using RedBook.Model;
using System.Collections.Generic;

namespace RedBook.Service.Responses
{
    public class ImageBasedResponse : BaseResponse
    {
        public List<Image> Images { get; set; }
    }
}
