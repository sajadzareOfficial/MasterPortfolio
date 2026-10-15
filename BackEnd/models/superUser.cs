namespace MineSiteBackend.models
{
    public class superUser
    {
        public int Id { get; set; }
        public string Name { get; set; }
        //public string  { get; set; }
        public superUser(int id, string name)
        {
            Id = id;
            Name = name;
        }
    }
}
