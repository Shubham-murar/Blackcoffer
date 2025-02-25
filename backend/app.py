from flask import Flask, request, jsonify
from pymongo import MongoClient
from flask_cors import CORS

app = Flask(__name__)
# Enable CORS for all routes starting with /api/
CORS(app, resources={r"/api/*": {"origins": "*"}})

# MongoDB connection
mongo_uri = "mongodb+srv://shubhammurar3322:1Lr4KB36l5GrMNEC@black.gbhk9.mongodb.net/Blackcoffer?retryWrites=true&w=majority"
client = MongoClient(mongo_uri)
db = client['Blackcoffer']
collection = db['jsondata']

@app.route('/', methods=['GET'])
def home():
    """Return a simple JSON message confirming that the backend is running."""
    return jsonify({"message": "Backend is running!"})

@app.route('/api/data', methods=['GET'])
def get_data():
    """
    Fetch filtered data from MongoDB based on query parameters.
    Filters include: end_year, topic, sector, region, pestle, source, swot, country, city.
    """
    filters = {}

    # For 'end_year', attempt to convert to integer if possible
    if 'end_year' in request.args and request.args['end_year']:
        try:
            filters['end_year'] = int(request.args['end_year'])
        except ValueError:
            filters['end_year'] = request.args['end_year']

    # For other filters (assumed to be strings)
    for key in ['topic', 'sector', 'region', 'pestle', 'source', 'swot', 'country', 'city']:
        if key in request.args and request.args[key]:
            filters[key] = request.args[key]

    data = list(collection.find(filters, {'_id': 0}))
    return jsonify(data)

@app.route('/api/distinct_values', methods=['GET'])
def get_distinct_values():
    """
    Returns distinct values for each field so that the React frontend can populate dropdowns.
    """
    fields = ['end_year', 'topic', 'sector', 'region', 'pestle', 'source', 'swot', 'country', 'city']
    distinct_data = {}
    for field in fields:
        values = collection.distinct(field)
        # Only include non-empty values
        distinct_data[field] = sorted([v for v in values if v])
    return jsonify(distinct_data)

if __name__ == '__main__':
    app.run(debug=True, port=5000)
