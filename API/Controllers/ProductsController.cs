using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using API.Data;
using API.Entities;
using System.Linq;
using System.Threading.Tasks;
using API.RequestHelpers;
using API.Extensions;

namespace API.Controllers
{
    public class ProductsController : BaseApiController
    {
        private readonly StoreContext _context;
        public ProductsController(StoreContext context)
        {
            _context=context;
        }

        [HttpGet]
        public async Task<ActionResult<PagedList<Product>>> GetProducts([FromQuery]ProductParams productParams)
        {
            var query = _context.Products
            .Sort(productParams.OrderBy)
            .Search(productParams.SearchTerm)
            .Filter(productParams.Brands, productParams.Types)
            .AsQueryable();

            var products = await PagedList<Product>.ToPagedList(query,
             productParams.PageNumber, productParams.PageSize);

            Response.AddPaginationHeader(products.MetaData);

             return products;
        }
        [HttpGet("{id}")]   
        public async Task<ActionResult<Product>> GetProduct(int id)
        {
            var product = await _context.Products.FindAsync(id);

            if (product==null) return NotFound();

            return product;
        }

        [HttpGet("filters")]

        public async Task<IActionResult> GetFilters()
        {
            var brands = await _context.Products.Select(p=>p.Brand).Distinct().ToListAsync();
            var types = await _context.Products.Select(p=>p.Type).Distinct().ToListAsync();

            return Ok(new {brands, types});
        }
    }
}


// using System;
// using System.Text.Json;
// using System.Collections.Generic;
// using System.Linq;
// using System.Threading.Tasks;
// using Microsoft.AspNetCore.Mvc;
// using Microsoft.EntityFrameworkCore;
// using API.RequestHelpers;
// using API.Data;
// using API.Entities;
// using API.Extensions;

// namespace API.Controllers
// {
//     public class ProductsController : BaseApiController
//     {
//         private readonly StoreContext _context;

//         public ProductsController(StoreContext context)
//         {
//             _context = context;
//         }

//         [HttpGet]
//         public async Task<ActionResult<PagedList<Product>>> GetProducts([FromQuery]ProductParams productParams)
//         {
//             var query = _context.Products.AsQueryable();

//             // Filtering by brands (case-sensitive)
//             if (!string.IsNullOrEmpty(productParams.Brands))
//             {
//                 var selectedBrands = productParams.Brands.Split(',').ToList();
//                 query = query.Where(p => selectedBrands.Contains(p.Brand));
//             }

//             // Filtering by types (case-sensitive)
//             if (!string.IsNullOrEmpty(productParams.Types))
//             {
//                 var selectedTypes = productParams.Types.Split(',').ToList();
//                 query = query.Where(p => selectedTypes.Contains(p.Type));
//             }

//             // Sorting
//             if (!string.IsNullOrEmpty(productParams.OrderBy))
//             {
//                 switch (productParams.OrderBy)
//                 {
//                     case "name":
//                         query = query.OrderBy(p => p.Name);
//                         break;
//                     case "price":
//                         query = query.OrderBy(p => p.Price);
//                         break;
//                     // Add more sorting options as needed
//                 }
//             }

//             // Searching (case-sensitive)
//             if (!string.IsNullOrEmpty(productParams.SearchTerm))
//             {
//                 // SQL Server-specific: Use COLLATE to specify a case-sensitive collation
//                 query = query.Where(p => 
//                     EF.Functions.Collate(p.Name, "Latin1_General_BIN").Contains(productParams.SearchTerm) || 
//                     EF.Functions.Collate(p.Description, "Latin1_General_BIN").Contains(productParams.SearchTerm));
//             }

//             var products = await PagedList<Product>.ToPagedList(query, productParams.PageNumber, productParams.PageSize);

//             Response.AddPaginationHeader(products.MetaData);

//             return products;
//         }

//         [HttpGet("{id}")]

//         public async Task<ActionResult<Product>> GetProduct(int id)
//         {
//             var product = await _context.Products.FindAsync(id);

//             if (product == null) return NotFound();

//             return product;
//         }

//         [HttpGet("filters")]

//         public async Task<IActionResult> GetFilters()
//         {
//             var brands = await _context.Products.Select(p=>p.Brand).Distinct().ToListAsync();
//             var types = await _context.Products.Select(p=>p.Type).Distinct().ToListAsync();

//             return Ok(new {brands, types});
//         }
//     }
// }
