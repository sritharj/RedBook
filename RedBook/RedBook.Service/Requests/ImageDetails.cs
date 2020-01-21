using System.IO;
using Microsoft.AspNetCore.Http;

namespace RedBook.Service.Requests
{
    public class ImageDetails
    {
        public ImageDetails(IFormFile file)
        {
            Image = GetBytes(file);
        }

        private static byte[] GetBytes(IFormFile file)
        {
            if (file.Length > 0)
            {
                using (var ms = new MemoryStream())
                {
                    file.CopyTo(ms);
                    return ms.ToArray();
                }
            }
            return new byte[0];
        }


        public byte[] Image { get; set; }
    }
}
