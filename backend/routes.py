# from flask import Blueprint, request, jsonify
#
#
# def create_routes(mongo):
#     api = Blueprint('api', __name__)
#     collection = mongo.db.jsondata  # Ensure your collection name is "jsondata" or adjust accordingly
#
#     @api.route('/data', methods=['GET'])
#     def get_data():
#         filters = {}
#
#         # Filter for end_year (assuming numeric filtering)
#         end_year = request.args.get('end_year')
#         if end_year:
#             try:
#                 filters['end_year'] = {"$lte": int(end_year)}
#             except ValueError:
#                 pass  # Optionally handle the error
#
#         # Filter for topic
#         topic = request.args.get('topic')
#         if topic:
#             filters['topic'] = topic
#
#         # Filter for sector
#         sector = request.args.get('sector')
#         if sector:
#             filters['sector'] = sector
#
#         # Filter for region
#         region = request.args.get('region')
#         if region:
#             filters['region'] = region
#
#         # Filter for PEST (pestle)
#         pestle = request.args.get('pestle')
#         if pestle:
#             filters['pestle'] = pestle
#
#         # Filter for source
#         source = request.args.get('source')
#         if source:
#             filters['source'] = source
#
#         # Filter for country
#         country = request.args.get('country')
#         if country:
#             filters['country'] = country
#
#         # Fetch matching documents (excluding the _id field)
#         data = list(collection.find(filters, {'_id': 0}))
#         return jsonify(data)
#
#     return api
