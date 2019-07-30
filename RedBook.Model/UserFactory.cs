namespace RedBook.Model
{
    public static class UserFactory
    {
        public static Employee GetUserType(UserTypes type)
        {
            switch(type)
            {
                case UserTypes.Driver:
                    return new Driver();

                case UserTypes.Mechanic:
                    return new Mechanic();

                default: return null;
            }
        }
    }
}
